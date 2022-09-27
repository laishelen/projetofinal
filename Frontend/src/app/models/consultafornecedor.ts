import { ResultadoConsultaFornecedor } from "./resultadoconsultafornecedor";

export interface ConsultaFornecedor {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaFornecedor[];
}