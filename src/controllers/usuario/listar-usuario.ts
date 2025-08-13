import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';

class ListarPratoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = httpRequest.params.id;
      const Prato = await User.findByPk(userId);
      if (!Prato && userId !== '{id}' && userId !== undefined) {
        return {
          statusCode: 404,
          body: { error: 'Prato não encontrado' },
        };
      } else if (userId !== '{id}' && userId !== undefined) {
        return {
          statusCode: 200,
          body: Prato,
        };
      }
      const pratos = await User.findAll();
      if (pratos.length === 0) {
        return {
          statusCode: 404,
          body: { error: 'Nenhum prato encontrado' },
        };
      }
      return {
        statusCode: 200,
        body: pratos,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default ListarPratoController;
