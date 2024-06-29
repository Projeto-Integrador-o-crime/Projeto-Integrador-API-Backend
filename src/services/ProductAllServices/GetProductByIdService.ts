import prismaClient from "../../prisma";

export class GetProductByIdService {
  async execute(id: string) {
    if (!id) {
      throw new Error("Esse produto não existe, informe um ID valido!");
    }

    // Busca o Product pelo ID
    const product = await prismaClient.product.findFirst({
      where: { id },
    });

    if (!product) {
      throw new Error("Produto não encontrado!");
    }

    return product;
  }
}