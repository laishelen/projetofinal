import { ResultadoConsultaCliente } from "./resultadoconsultacliente";

export interface ConsultaCliente {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaCliente[];
}