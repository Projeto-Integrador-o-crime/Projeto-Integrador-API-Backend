import prismaClient from "../../prisma";

interface IDeleteProductProps {
    id: string;
}

class DeleteProductService {
    async execute({ id }: IDeleteProductProps) {
        if (!id) {
            throw new Error("Solicitação invalida!");
        }

        const findProduct = await prismaClient.product.findFirst({
            where: {
                id: id,
            },
        });

        if (!findProduct) {
            throw new Error("Produto não encontrado!");
        }

        await prismaClient.product.delete({
            where: {
                id: findProduct.id,
            },
        });

        return { message: "Deletado com sucesso!" };
    }
}

export { DeleteProductService };
