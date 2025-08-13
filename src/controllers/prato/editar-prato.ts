import { Controller, HttpRequest, HttpResponse } from '../../interfaces';
import User from '../../models/user-model';
class EditarPratoController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { id } = httpRequest.params;
    const { nome, cozinha, preco,descrição  } = httpRequest.body;
    try {
      const prato = await User.findByPk(id);
      if (!prato) {
        return {
          statusCode: 404,
          body: { error: 'prato não encontrado' },
        };
      }
      await preco.update({
        nome,
        cozinha,
        descrição, 
      });
      return {
        statusCode: 200,
        body: prato,
      };
    } catch (error: any) {
      return {
        statusCode: 500,
        body: { error: error.message },
      };
    }
  }
}

export default EditarPratoController;
