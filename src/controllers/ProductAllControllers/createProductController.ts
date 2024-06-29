import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../../services/ProductAllServices/createProductService";

class CreateProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { name, description, price, productPicture} = request.body as {
            name: string;
            description: string;
            price: number;
            productPicture: string;
        };

        const productService = new CreateProductService();
        const product = await productService.execute({ name, description, price, productPicture });

        reply.send(product);
    }
}

export { CreateProductController };
