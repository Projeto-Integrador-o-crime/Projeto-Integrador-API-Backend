import prismaClient from "../prisma";

interface ResetPasswordProps {
    email: string;
    newPassword: string;
}

class ResetPasswordService {
    async execute({ email, newPassword }: ResetPasswordProps) {
        if (!email || !newPassword) {
            throw new Error("Preencha o email e a nova senha!");
        }

        // Verifica se o email está cadastrado
        const existingUser = await prismaClient.user.findFirst({
            where: {
                email,
            },
        });

        if (!existingUser) {
            throw new Error("Email não encontrado!");
        }

        // Atualiza a senha do usuário
        const updatedUser = await prismaClient.user.update({
            where: {
                id: existingUser.id,
            },
            data: {
                password: newPassword,
            },
        });

        const successMessage = `Senha redefinida com sucesso!`;

        return { message: successMessage };
    }
}

export { ResetPasswordService };