import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateEditUserService } from "../services/UpdateEditUserService";

class UpdateEditUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, name, description, profilePicture } = request.body as {
      id: string;
      name?: string;
      description?: string;
      profilePicture?: string;
    };

    const userService = new UpdateEditUserService();
    const user = await userService.execute({ id, name, description, profilePicture });

    reply.send(user);
  }
}

export { UpdateEditUserController };