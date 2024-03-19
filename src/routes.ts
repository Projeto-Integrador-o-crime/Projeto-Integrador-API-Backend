import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateUserController } from "./controllers/createUserController";
import { ListUserController } from "./controllers/ListUserController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {

  // ROTAS DA APLICAÇÃO
  // Listar todos os usuários
  fastify.get(
    "/users",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListUserController().handle(request, reply);
    }
  );

  // Cadastrar usuários
  fastify.post(
    "/user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply);
    }
  );
}
