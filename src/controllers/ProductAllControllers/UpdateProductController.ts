import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateProductService } from "../../services/ProductAllServices/UpdateProductService";

class UpdateProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id, name, description, price, productPicture } = request.body as {
            id: string;
            name?: string;
            description?: string;
            price?: number;
            productPicture?: string;
        };

        const productService = new UpdateProductService();
        const product = await productService.execute({ id, name, description, price, productPicture });

        reply.send(product);
    }
}

export { UpdateProductController };