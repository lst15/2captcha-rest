import { TwoCaptchaBypassRepository } from "../repository/implementations/two-captcha-bypass.repository";
import { BypassCaptchaUseCase } from "../usecase/bypass-captcha.usecase";

function BypassCaptchaFactory(){
  const repository = new TwoCaptchaBypassRepository();
  return new BypassCaptchaUseCase(repository);
}

export {BypassCaptchaFactory};