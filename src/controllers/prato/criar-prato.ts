import { created, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { PratoService } from "../../service/prato-service";

export class CriarPratoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const pratoService = new PratoService();
      const pratoCriado = await pratoService.criarPrato(httpRequest.body);
      return created(pratoCriado);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
