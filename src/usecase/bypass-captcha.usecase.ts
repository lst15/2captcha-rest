interface BypassCaptchaUseCaseRequest{
  sitekey:string
  url:string 
}

class BypassCaptchaUseCase {
  constructor(private repository:CaptchaBypassInterface){}

  async execute({sitekey,url}:BypassCaptchaUseCaseRequest){
    const solved = await this.repository.solve(sitekey,url);
    return solved;
  }

}

export {BypassCaptchaUseCase};