import { PedidoService } from "../../service/pedido-service";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { created, serverError } from "../../helpers/http-helper";
import { CreatePedidoDTO } from "../../types";

export class CriarPedidoController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {

            const pedidoService = new PedidoService();
            const pedidoData: CreatePedidoDTO = httpRequest.body;
            const novoPedido = await pedidoService.createPedido(pedidoData);
            return created(novoPedido)
        } catch (error: any) {
            return serverError(error);
        }
    }
}