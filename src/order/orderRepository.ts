import { Prisma } from "../../generated/prisma/client";
import { prisma } from "../database/prisma";

export class OrderRepository {
  async create(data: Prisma.OrderUncheckedCreateInput) {
    return await prisma.order.create({ data });
  }

  async findByUserId(userId: string) {
    return await prisma.order.findMany({ where: { userId } });
  }
}