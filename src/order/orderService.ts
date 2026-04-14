import { errorMessage } from "../errors/errorMessage";
import { OrderRepository } from "./orderRepository";

export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async executeCreate(userId: string, totalAmount: number, description?: string) {
    if (totalAmount <= 0) {
      throw new errorMessage('O valor do pedido não pode ser zero ou negativo.', 400);
    }

    if (totalAmount > 1000 && !description) {
      throw new errorMessage('Pedidos acima de R$ 1000 exigem uma descrição.', 400);
    }

    return await this.orderRepository.create({
      userId,
      totalAmount,
      description
    });
  }
}