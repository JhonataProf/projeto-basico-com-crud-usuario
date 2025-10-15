import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { PedidoService } from "../../service/pedido-service";

export class BuscarPedidoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pedidoService = new PedidoService();
      const pedido = await pedidoService.getPedidoById(httpRequest?.params.id);
      return ok(pedido);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
