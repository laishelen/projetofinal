import pyodbc
import json

class Cliente:

    def obterDriver(self):
        servername='localhost'
        port=1433
        database='PL5SQLProjeto'
        username='PL5SQLProjetoUser'
        password='Pa$$w0rd'
        driver="DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={};PORT={};DATABASE={};UID={};PWD={};"
        driver=driver.format(servername,port,database,username,password)
        return driver

    def inserirCliente(self,nome,nIF,morada,codigoPostal,telefone,eMail,foto):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_InserirCliente ?,?,?,?,?,?,?"
        values=(nome,nIF,morada,codigoPostal,telefone,eMail,foto)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.commit()
        cursor.close()
        connection.close()
        result=json.loads(result[0][0][1:-1])
        return result

    def atualizarCliente(self,numeroCliente,nome,nIF,morada,codigoPostal,telefone,eMail,foto):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_AtualizarCliente ?,?,?,?,?,?,?,?"
        values=(numeroCliente,nome,nIF,morada,codigoPostal,telefone,eMail,foto)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.commit()
        cursor.close()
        connection.close()
        result=json.loads(result[0][0][1:-1])
        return result

    def apagarCliente(self,numeroCliente):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_ApagarCliente ?"
        values=(numeroCliente)
        cursor.execute(sqlquery,values)
        result=cursor.fetchall()
        cursor.commit()
        cursor.close()
        connection.close()
        result=json.loads(result[0][0][1:-1])
        return result

    def consultarTodosOsClientes(self):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_ConsultarClientes"
        cursor.execute(sqlquery)
        resultado=cursor.fetchall()
        cursor.close()
        connection.close()
        output=''
        for parte in resultado:
            output+=parte[0]
        resultado=json.loads(output)[0]
        return resultado

    def consultarCliente(self,numeroCliente):
        driver=self.obterDriver()
        connection=pyodbc.connect(driver)
        cursor=connection.cursor()
        sqlquery="EXEC dbo.SP_ConsultarCliente ?"
        values=(numeroCliente)
        cursor.execute(sqlquery,values)
        resultado=cursor.fetchall()
        cursor.close()
        connection.close()
        output=''
        for parte in resultado:
            output+=parte[0]
        resultado=json.loads(output)[0]
        return resultado
