import { ResultadoConsultaFornecedores } from "./resultadoconsultafornecedores";

export interface ConsultaFornecedores {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaFornecedores[];
}