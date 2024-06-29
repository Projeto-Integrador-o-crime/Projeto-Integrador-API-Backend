import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateUserController } from "./controllers/UserAllControllers/createUserController";
import { ListUserController } from "./controllers/UserAllControllers/ListUserController";
import { DeleteUserController } from "./controllers/UserAllControllers/DeleteUserController";
import { LoginUserController } from "./controllers/UserAllControllers/LoginUserController";
import { ResetPasswordController } from "./controllers/UserAllControllers/ResetPasswordService";
import { UpdateEditUserController } from "./controllers/UserAllControllers/UpdateEditUserController"
import { GetUserByIdController } from "./controllers/UserAllControllers/GetUserByIdController";
import { CreateProductController } from "./controllers/ProductAllControllers/createProductController";
import { GetProductByIdController } from "./controllers/ProductAllControllers/GetProductByIdController";
import { ListProductController } from "./controllers/ProductAllControllers/ListProductController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {

  //                                USERS                                   //


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

  // Obter dados do usuário pelo corpo da solicitação (por ID)
  fastify.get(
    "/user-data/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetUserByIdController().handle(request, reply);
    }
  );

  // Atualizar perfil do usuário
  fastify.put(
    "/user/profile",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateEditUserController().handle(request, reply);
    }
  );


  //                                PRODUCTS                                   //

  //Criar produtos
  fastify.post(
    "/product",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateProductController().handle(request, reply);
    }
  );

  //Listar todos os produtos
  fastify.get(
    "/products",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListProductController().handle(request, reply);
    }
  );

  //Listar produtos por Id
  fastify.get(
    "/product-data/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetProductByIdController().handle(request, reply);
    }
  );

  
}
