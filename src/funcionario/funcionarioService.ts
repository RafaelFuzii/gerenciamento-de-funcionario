import { Prisma } from "../../generated/prisma/client";
import { FuncionarioRepository } from "./funcionarioReposiroty";

export class FuncionarioService {
    constructor(private funcionarioRepository: FuncionarioRepository) {}

    async novoFuncionario(prismaFuncionario: Prisma.FuncionarioUncheckedCreateInput) {
        return await this.funcionarioRepository.create(prismaFuncionario)
    }
}