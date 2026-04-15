import { Router } from 'express';
import { OrderRepository } from './order/orderRepository';
import { OrderService } from './order/orderService';
import { OrderController } from './order/orderController';
import { FuncionarioRepository } from './funcionario/funcionarioReposiroty'; // Atenção ao nome do arquivo
import { FuncionarioService } from './funcionario/funcionarioService';
import { FuncionarioController } from './funcionario/funcionarioController';

// CONFIGURAÇÃO DAS ROTAS DE ORDERS
const orderRoutes = Router();
const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

// CONFIGURAÇÃO DAS ROTAS DE FUNCIONÁRIOS
const funcionarioRoutes = Router();
const funcionarioRepository = new FuncionarioRepository();
const funcionarioService = new FuncionarioService(funcionarioRepository);
const funcionarioController = new FuncionarioController(funcionarioService);

// Usamos .bind para garantir que o 'this' da classe Controller não se perca
funcionarioRoutes.get('/', funcionarioController.listarFuncionarios.bind(funcionarioController));
funcionarioRoutes.get('/:id', funcionarioController.acharFuncionario.bind(funcionarioController));
funcionarioRoutes.post('/criar', funcionarioController.criarFuncionario.bind(funcionarioController));
funcionarioRoutes.put('/atualizar/:id', funcionarioController.atualizarFuncionario.bind(funcionarioController));
funcionarioRoutes.delete('/deletar/:id', funcionarioController.deletarFuncionario.bind(funcionarioController));
export { orderRoutes, funcionarioRoutes };