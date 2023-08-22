interface CaptchaBypassInterface {
 solve(siteKey:string,url:string):Promise<any>
}