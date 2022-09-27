import { ResultadoConsultaProdutos } from '../models/resultadoconsultaprodutos';

export interface ConsultaProdutos {
    ErrorCode: number;
    ErrorMessage: string;
    Resultado: ResultadoConsultaProdutos[];
}