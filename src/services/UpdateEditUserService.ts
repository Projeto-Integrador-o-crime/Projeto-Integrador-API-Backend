import prismaClient from "../prisma";

interface UpdateUserProps {
  id: string;
  name?: string;
  description?: string;
}

class UpdateEditUserService {
  async execute({ id, name, description }: UpdateUserProps) {
    if (!id) {
      throw new Error("ID do usuário não fornecido!");
    }

    // Verifica se o usuário existe
    const existingUser = await prismaClient.user.findFirst({
      where: { id },
    });

    if (!existingUser) {
      throw new Error("Usuário não encontrado!");
    }

    // Atualiza os campos name e description do usuário
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
      },
    });

    return updatedUser;
  }
}

export { UpdateEditUserService };