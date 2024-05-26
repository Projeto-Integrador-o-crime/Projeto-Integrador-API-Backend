import { FastifyRequest, FastifyReply } from "fastify";
import { GetUserByIdService } from "../services/GetUserByIdService";

class GetUserByIdController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.body as { id: string };

        const userService = new GetUserByIdService();
        const user = await userService.execute(id);

        reply.send(user);
    }
}

export { GetUserByIdController };