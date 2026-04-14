import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../database/prisma";

export class FuncionarioRepository {
    async create(data: Prisma.FuncionarioUncheckedCreateInput) {
        return await prisma.funcionario.create({ data });
    }

}