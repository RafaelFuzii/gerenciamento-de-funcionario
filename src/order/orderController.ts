import { OrderService } from "./orderService";
import { Request, Response } from 'express';

export class OrderController {
  constructor(private orderService: OrderService) {}

  async create(req: Request, res: Response) {
    const { userId, totalAmount, description } = req.body;
    
    const order = await this.orderService.executeCreate(userId, totalAmount, description);
    
    return res.status(201).json(order); // Sempre retorna JSON
  }
}