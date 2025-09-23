import { Router } from "express";
import adaptRoute from "../adapters/express-route-adapter";
import { DeletarPedidoController } from "../controllers/pedido/deletar-pedido";
import { authMiddleware } from "../middlewares";
import authorizeRoles from "../middlewares/authorize-roles";

export default (router: Router): void => {
    router.delete("/pedidos/{id}", 
        authMiddleware,
        authorizeRoles(['Gerente']),
        adaptRoute(new DeletarPedidoController()));
};