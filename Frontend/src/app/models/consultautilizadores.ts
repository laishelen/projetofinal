import { ResultadoConsultaUtilizadores } from "./resultadoconsultautilizadores";

export interface ConsultaUtilizadores {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaUtilizadores[];
}