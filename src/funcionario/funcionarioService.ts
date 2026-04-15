import { Prisma } from "../../generated/prisma/client";
import { errorMessage } from "../errors/errorMessage";
import { FuncionarioRepository } from "./funcionarioReposiroty";

export class FuncionarioService {
    constructor(private funcionarioRepository: FuncionarioRepository) {}

    async novoFuncionario(prismaFuncionario: Prisma.FuncionarioUncheckedCreateInput) {
        return await this.funcionarioRepository.create(prismaFuncionario)
    }

    async acharFuncionario(id: string) {
        return await this.funcionarioRepository.findById(id)
    }

    async listarFuncionarios() {
        return await this.funcionarioRepository.findAll()
    }

    async atualizarFuncionario(id: string, data: Prisma.FuncionarioUpdateInput){
        console.log(id)
        const funcionario = await this.funcionarioRepository.findById(id)
        if (!funcionario) {
            throw new errorMessage("Funcionário não encontrado", 404)
        }

        return await this.funcionarioRepository.update(id, data)
    }

    async deletarFuncionario(id: string) {
        const funcionario = await this.funcionarioRepository.findById(id)
        if (!funcionario) {
            throw new errorMessage("Funcionário não encontrado", 404)
        }

        return await this.funcionarioRepository.delete(id)
    }
}