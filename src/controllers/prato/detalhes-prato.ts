import { Controller, HttpRequest, HttpResponse } from "../../interfaces";
import Prato from "../../models/prato-model";

export default class DetalhesPratoController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { id } = httpRequest.params;

            if (!id){
                return{
                    statusCode:400,
                    body: { error: "É necessário informar o id do prato"}
                }
            }
            const prato = await Prato.findByPk(id);
            
            if (!prato) {
                return {
                    statusCode: 404,
                    body: { error: 'Prato não encontrado' }
                };
            }

            return {
                statusCode: 200,
                body: prato
            };
        } catch (error: any) {
            return {
                statusCode: 500,
                body: { error: error.message }
            };
        }
    }
}