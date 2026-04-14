import { Request, Response } from "express";
import { FuncionarioService } from "./funcionarioService";

export class FuncionarioController {
    constructor(private funcionarioService: FuncionarioService) {}

    async criarFuncionario(req: Request, res: Response) {
        const { name, email, cpf } = req.body

        const novoFuncionario = await this.funcionarioService.novoFuncionario({ name, email, cpf})
        res.status(201).json(novoFuncionario)
    }
}