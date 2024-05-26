import prismaClient from "../prisma";

interface UpdateUserProps {
  id: string;
  name?: string;
  description?: string | null;
  profilePicture?: string | null;
}

class UpdateEditUserService {
  async execute({ id, name, description, profilePicture }: UpdateUserProps) {
    if (!id) {
      throw new Error("ID do usuário não fornecido!");
    }

    // Verifica se o usuário existe
    const existingUser = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new Error("Usuário não encontrado!");
    }

    // Atualiza os campos do usuário
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        name: name || undefined,
        description: description || undefined,
        profilePicture: profilePicture || undefined
      },
    });

    return updatedUser;
  }
}

export { UpdateEditUserService };