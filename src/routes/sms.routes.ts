import { Router } from "express";

import { SendSMSController } from "@modules/sms/useCase/sendSMSController";

const smsRoutes = Router();

const sendSMSController = new SendSMSController();

smsRoutes.post("/", sendSMSController.handle);

export { smsRoutes };
