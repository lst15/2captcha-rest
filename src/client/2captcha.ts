const captcha = require("2captcha")
import { env } from "../env-schema";

export const twoCaptchaClient = new captcha.Solver(
  env.YOUR_2CAPTCHA_KEY
);