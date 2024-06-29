import { FastifyRequest, FastifyReply } from "fastify";
import { ListProductService } from "../../services/ProductAllServices/ListProductService";

class ListProductController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listproductservice = new ListProductService();

    const products = await listproductservice.execute();

    reply.send(products);
  }
}
export { ListProductController };