import { FastifyRequest, FastifyReply } from "fastify";
import { GetProductByIdService } from "../../services/ProductAllServices/GetProductByIdService";

class GetProductByIdController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const productService = new GetProductByIdService();
        const product = await productService.execute(id);

        reply.send(product);
    }
}

export { GetProductByIdController };