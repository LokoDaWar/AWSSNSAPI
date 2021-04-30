import { Request, Response } from "express";

import { SendSMSUseCase } from "./sendSMSUseCase";

class SendSMSController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { secret, message, cell } = request.body;

    const sendSMSUseCase = new SendSMSUseCase();

    const sms = await sendSMSUseCase.execute({
      secret,
      message,
      cell,
    });

    return response.json(sms);
  }
}

export { SendSMSController };
