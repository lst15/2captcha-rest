import { Express } from "express";
import { BypassCaptchaController } from "../controller/bypass-captcha.controller";

function BypassCaptchaRoutes(app:Express){
  app.post("/solve",BypassCaptchaController);
}

export {BypassCaptchaRoutes};