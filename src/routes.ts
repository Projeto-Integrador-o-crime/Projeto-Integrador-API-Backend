import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateUserController } from "./controllers/createUserController";
import { ListUserController } from "./controllers/ListUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { ResetPasswordController } from "./controllers/ResetPasswordService";
import { UpdateEditUserController } from "./controllers/UpdateEditUserController"

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

  // Deletar usuários
  fastify.delete(
    "/user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply);
    }
  );

  // Login usuário
  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginUserController().handle(request, reply);
    }
  );

  // Redefinir senha 
  fastify.post(
    "/reset-password",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ResetPasswordController().handle(request, reply);
    }
  );

  // Atualizar perfil do usuário
  fastify.put(
    "/user/profile",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateEditUserController().handle(request, reply);
    }
  );
}
