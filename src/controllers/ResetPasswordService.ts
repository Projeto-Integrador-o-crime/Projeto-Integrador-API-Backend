import { FastifyRequest, FastifyReply } from "fastify";
import { ResetPasswordService } from "../services/ResetPasswordService";

class ResetPasswordController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, newPassword } = request.body as {
      email: string;
      newPassword: string;
    };

    const resetPasswordService = new ResetPasswordService();
    const result = await resetPasswordService.execute({ email, newPassword });

    reply.send(result);
  }
}

export { ResetPasswordController };
