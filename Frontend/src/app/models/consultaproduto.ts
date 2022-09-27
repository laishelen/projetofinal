import { ResultadoConsultaProduto } from "./resultadoconsultaproduto";

export interface ConsultaProduto {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaProduto[];
}