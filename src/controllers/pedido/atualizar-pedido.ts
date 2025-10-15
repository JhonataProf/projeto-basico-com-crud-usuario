import { ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { PedidoService } from "../../service/pedido-service";
import { UpdatePedidoDTO } from "../../types";

export class AtualizarPedidoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pedidoService = new PedidoService();
      const pedidoData: UpdatePedidoDTO = httpRequest.body;
      const id = httpRequest?.params.id;
      const pedidoAtualizado = await pedidoService.updatePedido(id, pedidoData);
      return ok(pedidoAtualizado);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
