import prismaClient from "../prisma";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
  description: string;
}

class CreateUserService {
  async execute({ name, email, password, description }: CreateUserProps) {
    if (!name || !email || !password) {
      throw new Error("Preencha todos os campos!");
    }

    // Verifica se o email já está cadastrado
    const usuarioExiste = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (usuarioExiste) {
      throw new Error("Este email já está cadastrado!");
    }

    // Se o email não existe no banco, cria o novo usuário
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
        description
      },
    });

    return user;
  }
}

export { CreateUserService };