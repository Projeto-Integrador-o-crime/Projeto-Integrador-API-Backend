import prismaClient from "../../prisma";

interface UpdateProductProps {
    id: string;
    name?: string;
    description?: string;
    price?: number;
    productPicture?: string;
}

class UpdateProductService {
    async execute({ id, name, description, price, productPicture }: UpdateProductProps) {
        if (!id) {
            throw new Error("ID do Produto não existe!");
        }

        // Verifica se o produto existe
        const existingProduct = await prismaClient.product.findUnique({
            where: { id },
        });

        if (!existingProduct) {
            throw new Error("Produto não encontrado!");
        }

        // Atualiza os campos do Produto
        const updatedProduct = await prismaClient.product.update({
            where: { id },
            data: {
                name: name || undefined,
                description: description || undefined,
                price: price || undefined,
                productPicture: productPicture || undefined
            },
        });

        return updatedProduct;
    }
}

export { UpdateProductService };