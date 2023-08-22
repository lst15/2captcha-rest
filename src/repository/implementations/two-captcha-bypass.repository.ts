import { twoCaptchaClient } from "../../client/2captcha";

class TwoCaptchaBypassRepository implements CaptchaBypassInterface {

  async solve(siteKey: string, url: string): Promise<any> {
    return await twoCaptchaClient.recaptcha(siteKey,url);    
  }
  
}

export {TwoCaptchaBypassRepository};