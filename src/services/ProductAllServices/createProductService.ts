import prismaClient from "../../prisma";
interface CreateProductProps {
    name: string;
    description: string;
    price: string;
    productPicture: string;
}



class CreateProductService {
    async execute({ name, description, price, productPicture }: CreateProductProps) {
        if (!name || !description || !price || !productPicture) {
            throw new Error("Informe todos os dados do produto!");
        }


        const productExists = await prismaClient.product.findFirst({
            where: {
                name,
            },
        });

        if (productExists) {
            throw new Error("Amigão, ocê já subiu esse produto zé, ta loco?!");
        }


        const product = await prismaClient.product.create({
            data: {
                name,
                description,
                price,
                productPicture
            },
        });

        return product;
    }
}

export { CreateProductService };