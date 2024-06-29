import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../../services/UserAllServices/createUserService";

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password, description, profilePicture } = request.body as {
      name: string;
      email: string;
      password: string;
      description: string;
      profilePicture: string
    };

    const userService = new CreateUserService();
    const user = await userService.execute({ name, email, password, description, profilePicture });

    reply.send(user);
  }
}

export { CreateUserController };
