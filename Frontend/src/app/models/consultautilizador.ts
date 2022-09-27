import { ResultadoConsultaUtilizador } from "./resultadoconsultautilizador";

export interface ConsultaUtilizador {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaUtilizador[];
}