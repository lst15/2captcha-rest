import { Request, Response } from "express";
import { BypassCaptchaFactory } from "../../factory/bypass-captcha.factory";

const BypassCaptchaController = async(req:Request, res:Response) => {
  const {sitekey,url} = req.body;

  const factory = BypassCaptchaFactory();

  try {
    const executed = await factory.execute({sitekey,url});
    res.status(200).json({message:executed})
  } catch (error) {
    res.status(500).json({message: error})
  }

}

export {BypassCaptchaController};