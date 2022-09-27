from flask import Flask,render_template,request,redirect,url_for,session
from dbapi.clientes import Cliente
from dbapi.fornecedores import Fornecedor
from dbapi.produtos import Produto
from dbapi.utilizadores import Utilizador
from dbapi.autenticacao import Autenticacao
from dbapi.newsletter import Newsletter
from dbapi.pesquisa import Pesquisa
import feedparser
import requests
import json

app=Flask(__name__)
app.secret_key="k4QtZWvoB9NnNnJrbv4SpSC2wtw7NHCwSekUXgqDoyuUgYiYe5UbzuJj7Xwe4jNZa3YjUorWAspAa85G7DoPAhWvkdCn4W6LsD6EnU8Nnam7baX8iHiWASpKzqMTU9UJ"

@app.route('/')
def inicio():
    session["Page"]="inicio.html"
    autenticacao=Autenticacao()
    if(session.get("ChaveSessao") is None or autenticacao.verificarSessao(session.get("ChaveSessao"))["ErrorCode"]!=0):
        session["ChaveSessao"]="00000000-0000-0000-0000-000000000000"
        session["Nome"]=""
        session["Foto"]=""
    return render_template('inicio.html')

@app.route('/quemsomos')
def quemsomos():
    return render_template('quemsomos.html')

@app.route('/loja')
def loja():
    return render_template('loja.html')

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

@app.route('/perfil')
def perfil():
    session["Page"]="perfil.html"
    autenticacao=Autenticacao()
    if(session.get("ChaveSessao") is None or autenticacao.verificarSessao(session.get("ChaveSessao"))["ErrorCode"]!=0):
        return render_template('login.html')
    utilizador=Utilizador()
    resultado=utilizador.consultarPerfil(session.get("ChaveSessao"))
    return render_template('perfil.html',data=resultado)

@app.route('/alterardadosdeperfil')
def alterarDadosDePerfil():
    session["Page"]="perfil.html"
    autenticacao=Autenticacao()
    if(session.get("ChaveSessao") is None or autenticacao.verificarSessao(session.get("ChaveSessao"))["ErrorCode"]!=0):
        return render_template('login.html')
    ChaveSessao=session.get("ChaveSessao")
    PrimeiroNome=request.form["PrimeiroNome"]
    UltimoNome=request.form["UltimoNome"]
    Morada=request.form["Morada"]
    CodigoPostal=request.form["CodigoPostal"]
    Telefone=request.form["Telefone"]
    EMail=request.form["EMail"]
    Foto=request.form["Foto"]
    utilizador=Utilizador()
    resultado=utilizador.alterarDadosDePerfil(ChaveSessao,PrimeiroNome,UltimoNome,Morada,CodigoPostal,Telefone,EMail,Foto)
    return render_template('perfil.html',data=resultado)

@app.route('/atualizarpassword')
def atualizarPassword():
    session["Page"]="perfil.html"
    autenticacao=Autenticacao()
    if(session.get("ChaveSessao") is None or autenticacao.verificarSessao(session.get("ChaveSessao"))["ErrorCode"]!=0):
        return render_template('login.html')
    ChaveSessao=session.get("ChaveSessao")
    Password=request.form["Password"]
    utilizador=Utilizador()
    resultado=utilizador.atualizarPassword(ChaveSessao,Password)
    return render_template('perfil.html',data=resultado)

@app.route('/gestao')
def gestao():
    session["Page"]="gestao.html"
    autenticacao=Autenticacao()
    if(session.get("ChaveSessao") is None or autenticacao.verificarSessao(session.get("ChaveSessao"))["ErrorCode"]!=0):
        return render_template('login.html')
    return render_template('gestao.html')

@app.route('/backend/clientes')
def clientes():
    cliente=Cliente()
    resultado=cliente.consultarTodosOsClientes()
    return resultado

@app.route('/backend/consultarcliente/<numerocliente>')
def consultarcliente(numerocliente):
    cliente=Cliente()
    data=cliente.consultarCliente(numerocliente)
    return data

@app.route("/backend/inserircliente",methods=["POST"])
def inserircliente():
    Nome=request.json["Nome"]
    NIF=request.json["NIF"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    Foto=request.json["Foto"]
    cliente=Cliente()
    resultado=cliente.inserirCliente(Nome,NIF,Morada,CodigoPostal,Telefone,Email,Foto)
    return resultado

@app.route("/backend/atualizarcliente",methods=["POST"])
def atualizarcliente():
    NumeroCliente=request.json["NumeroCliente"]
    Nome=request.json["Nome"]
    NIF=request.json["NIF"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    Foto=request.json["Foto"]
    cliente=Cliente()
    resultado=cliente.atualizarCliente(NumeroCliente,Nome,NIF,Morada,CodigoPostal,Telefone,Email,Foto)
    return resultado

@app.route('/backend/apagarcliente/<numerocliente>')
def apagarcliente(numerocliente):
    print(numerocliente)
    cliente=Cliente()
    data=cliente.apagarCliente(numerocliente)
    return data

@app.route('/backend/fornecedores')
def fornecedores():
    fornecedor=Fornecedor()
    resultado=fornecedor.consultarTodosOsFornecedores()
    return resultado

@app.route('/backend/consultarfornecedor/<numerofornecedor>')
def consultarfornecedor(numerofornecedor):
    fornecedor=Fornecedor()
    resultado=fornecedor.consultarFornecedor(numerofornecedor)
    return resultado

@app.route("/backend/inserirfornecedor",methods=["POST"])
def inserirfornecedor():
    Nome=request.json["Nome"]
    NIPC=request.json["NIPC"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    fornecedor=Fornecedor()
    resultado=fornecedor.inserirFornecedor(Nome,NIPC,Morada,CodigoPostal,Telefone,Email)
    return resultado

@app.route("/backend/atualizarfornecedor",methods=["POST"])
def atualizarfornecedor():
    NumeroFornecedor=request.json["NumeroFornecedor"]
    Nome=request.json["Nome"]
    NIPC=request.json["NIPC"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    fornecedor=Fornecedor()
    resultado=fornecedor.atualizarFornecedor(NumeroFornecedor,Nome,NIPC,Morada,CodigoPostal,Telefone,Email)
    return resultado

@app.route('/backend/apagarfornecedor/<numerofornecedor>')
def apagarfornecedor(numerofornecedor):
    fornecedor=Fornecedor()
    resultado=fornecedor.apagarFornecedor(numerofornecedor)
    return resultado

@app.route('/backend/produtos')
def produtos():
    produto=Produto()
    resultado=produto.consultarTodosOsProdutos()
    return resultado

@app.route('/backend/consultarproduto/<numeroproduto>')
def consultarproduto(numeroproduto):
    produto=Produto()
    resultado=produto.consultarProduto(numeroproduto)
    return resultado

@app.route("/backend/inserirproduto",methods=["POST"])
def inserirproduto():
    Designacao=request.json["Designacao"]
    Descricao=request.json["Descricao"]
    UnidadeMedida=request.json["UnidadeMedida"]
    PrecoUnitario=request.json["PrecoUnitario"]
    TaxaIVA=request.json["TaxaIVA"]
    Foto=request.json["Foto"]
    produto=Produto()
    resultado=produto.inserirProduto(Designacao,Descricao,UnidadeMedida,PrecoUnitario,TaxaIVA,Foto)
    return resultado

@app.route("/backend/atualizarproduto",methods=["POST"])
def atualizarproduto():
    NumeroProduto=request.json["NumeroProduto"]
    Designacao=request.json["Designacao"]
    Descricao=request.json["Descricao"]
    UnidadeMedida=request.json["UnidadeMedida"]
    PrecoUnitario=request.json["PrecoUnitario"]
    TaxaIVA=request.json["TaxaIVA"]
    Foto=request.json["Foto"]
    produto=Produto()
    resultado=produto.atualizarProduto(NumeroProduto,Designacao,Descricao,UnidadeMedida,PrecoUnitario,TaxaIVA,Foto)
    return resultado

@app.route('/backend/apagarproduto/<numeroproduto>')
def apagarproduto(numeroproduto):
    produto=Produto()
    resultado=produto.apagarProduto(numeroproduto)
    return resultado

@app.route('/backend/utilizadores')
def utilizadores():
    utilizador=Utilizador()
    resultado=utilizador.consultarTodosOsUtilizadores()
    return resultado

@app.route('/backend/consultarutilizador/<numeroutilizador>')
def consultarutilizador(numeroutilizador):
    utilizador=Utilizador()
    resultado=utilizador.consultarUtilizador(numeroutilizador)
    return resultado

@app.route("/backend/inserirutilizador",methods=["POST"])
def inserirutilizador():
    PrimeiroNome=request.json["PrimeiroNome"]
    UltimoNome=request.json["UltimoNome"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    Password=request.json["Password"]
    Foto=request.json["Foto"]
    utilizador=Utilizador()
    resultado=utilizador.inserirUtilizador(PrimeiroNome,UltimoNome,Morada,CodigoPostal,Telefone,Email,Password,Foto)
    return resultado

@app.route("/backend/atualizarutilizador",methods=["POST"])
def atualizarutilizador():
    NumeroUtilizador=request.json["NumeroUtilizador"]
    PrimeiroNome=request.json["PrimeiroNome"]
    UltimoNome=request.json["UltimoNome"]
    Morada=request.json["Morada"]
    CodigoPostal=request.json["CodigoPostal"]
    Telefone=request.json["Telefone"]
    Email=request.json["EMail"]
    Password=request.json["Password"]
    Foto=request.json["Foto"]
    utilizador=Utilizador()
    resultado=utilizador.atualizarUtilizador(NumeroUtilizador,PrimeiroNome,UltimoNome,Morada,CodigoPostal,Telefone,Email,Password,Foto)
    return resultado

@app.route('/backend/apagarutilizador/<numeroutilizador>')
def apagarutilizador(numeroutilizador):
    utilizador=Utilizador()
    resultado=utilizador.apagarUtilizador(numeroutilizador)
    return resultado

@app.route('/inserirEmailNewsletter/<email>')
def inserirEmailNewsletter(email):
    newsletter=Newsletter()
    data=newsletter.inserirEMailNewsletter(email)
    return data

@app.route("/pesquisa")
def pesquisa():
    textopesquisa=request.args.get("textopesquisa")
    pesquisa=Pesquisa()
    resultado=pesquisa.pesquisar(textopesquisa)
    return render_template('pesquisa.html',data=resultado)

@app.route('/logout')
def logout():
    autenticacao=Autenticacao()
    autenticacao.logout(session.get("ChaveSessao"))
    session["ChaveSessao"]="00000000-0000-0000-0000-000000000000"
    session["Nome"]=""
    session["Foto"]=""
    return redirect(url_for('inicio'))

@app.route('/backend/login',methods=["POST"])
def authenticate():
    Username=request.form["username"]
    Password=request.form["password"]
    autenticacao=Autenticacao()
    resultado=autenticacao.login(Username,Password)
    return resultado

@app.route('/backend/recuperarpassword',methods=["POST"])
def recuperarpassword():
    EMail=request.json["email"]
    autenticacao=Autenticacao()
    resultado=autenticacao.recuperarPassword(EMail)
    return redirect(url_for("mensagemenviada"))

@app.route('/mensagemenviada')
def mensagemenviada():
    return render_template('mensagemenviada.html')

@app.route('/novapassword/<chaverecuperacaopassword>')
def novapassword(chaverecuperacaopassword):
    return render_template('novapassword.html',data=chaverecuperacaopassword)

@app.route('/modificarpassword',methods=["POST"])
def modificarpassword():
    ChaveRecuperacaoPassword=request.form["chaverecuperacaopassword"]
    Password=request.form["password"]
    autenticacao=Autenticacao()
    resultado=autenticacao.alterarPassword(ChaveRecuperacaoPassword,Password)
    return redirect(url_for("passwordalterada"))

@app.route('/passwordalterada')
def passwordalterada():
    return render_template('passwordalterada.html')

@app.route('/backend/desbloquearconta/<numeroutilizador>')
def desbloquearconta(numeroutilizador):
    autenticacao=Autenticacao()
    resultado=autenticacao.desbloquearConta(numeroutilizador)
    return resultado

@app.route('/ativeasuaconta')
def ativeasuaconta():
    return render_template('ativeasuaconta.html')

@app.route('/ativarconta/<chaveativacaoconta>')
def ativarconta(chaveativacaoconta):
    autenticacao=Autenticacao()
    resultado=autenticacao.ativarConta(chaveativacaoconta)
    return redirect(url_for('contaativada'))

@app.route('/contaativada')
def contaativada():
    return render_template('contaativada.html')

@app.route('/backend/noticiasrtp')
def noticiasrtp():
    url="https://www.rtp.pt/noticias/rss"
    resposta=feedparser.parse(url)
    noticias=[]
    for noticia in resposta["entries"]:
        titulo=noticia["title"]
        posicao=noticia["summary_detail"]["value"].find("/>\n")+9
        corpo=(noticia["summary_detail"]["value"])[posicao:]
        titulo=titulo.replace("&quot;","")
        corpo=corpo.replace("&quot;","")
        if titulo.find(" - Edição de")==-1:
            noticias.append({"Titulo":titulo,"Corpo":corpo})
    resultado={"Noticias":noticias}
    return resultado

@app.route('/backend/tempo')
def tempo():
    url="https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1110600.json"
    resposta = requests.get(url)
    resultado = resposta.json()
    tMin=resultado["data"][0]["tMin"]
    tMax=resultado["data"][0]["tMax"]

    url="http://dataservice.accuweather.com/currentconditions/v1/274087?apikey=mZOgAswB6bq80TDSGAETvC2XBmAphtY2"
    resposta=requests.get(url)
    print(resposta.text)
    resposta=json.loads(resposta.text[1:-1])
    ficheiroTempo=(resposta["WeatherText"].lower()).replace(" ","")+".png"
    temperaturaAtual=resposta["Temperature"]["Metric"]["Value"]

    return {"FicheiroTempo":ficheiroTempo,"TemperaturaAtual":temperaturaAtual,"TemperaturaMinima":tMin,"TemperaturaMaxima":tMax}

if __name__=='__main__':
    app.debug=True
    app.run("localhost","5000")