import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductService } from "../../services/ProductAllServices/DeleteProductService";

class DeleteProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const ProductService = new DeleteProductService();

        const product = await ProductService.execute({ id });

        reply.send(product);
    }
}

export { DeleteProductController };