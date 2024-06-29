import prismaClient from "../../prisma";

export class GetUserByIdService {
  async execute(id: string) {
    if (!id) {
      throw new Error("ID do usuário não fornecido!");
    }

    // Busca o usuário pelo ID
    const user = await prismaClient.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    return user;
  }
}