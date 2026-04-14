import { Router } from 'express';
import { OrderRepository } from './order/orderRepository';
import { OrderService } from './order/orderService';
import { OrderController } from './order/orderController';

const orderRoutes = Router();

// Injeção de dependências manual
const repository = new OrderRepository();
const service = new OrderService(repository);
const controller = new OrderController(service);

// Usamos .bind para garantir que o 'this' da classe Controller não se perca
orderRoutes.post('/', controller.create.bind(controller));

export { orderRoutes };