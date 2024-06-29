import prismaClient from "../../prisma";

interface LoginUserProps {
  email: string;
  password: string;
}

class LoginUserService {
  async execute({ email, password }: LoginUserProps) {
    if (!email || !password) {
      throw new Error("Por favor, forneça um e-mail e senha.");
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    if (user.password !== password) {
      throw new Error("Senha incorreta.");
    }

    return user;
  }
}

export { LoginUserService };
