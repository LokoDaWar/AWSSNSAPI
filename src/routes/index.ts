import { Router } from "express";

import { smsRoutes } from "./sms.routes";

const router = Router();

router.use("/send", smsRoutes);

export { router };
