import { ResultadoConsultaClientes } from "./resultadoconsultaclientes";

export interface ConsultaClientes {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaClientes[];
}