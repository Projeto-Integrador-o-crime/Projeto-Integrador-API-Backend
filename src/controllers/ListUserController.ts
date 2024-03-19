import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listuserservice = new ListUserService();

    const users = await listuserservice.execute();

    reply.send(users);
  }
}
export { ListUserController };
