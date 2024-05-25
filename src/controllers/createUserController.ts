import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/createUserService";

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password, description } = request.body as {
      name: string;
      email: string;
      password: string;
      description: string;
    };

    const userService = new CreateUserService();
    const user = await userService.execute({ name, email, password, description });

    reply.send(user);
  }
}

export { CreateUserController };
