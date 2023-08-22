class MemoryCaptchaBypassRepository implements CaptchaBypassInterface {
  
  solve(siteKey: string, url: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

}