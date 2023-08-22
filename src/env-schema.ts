import 'dotenv/config';
import {z} from "zod";

const schema = z.object({
  YOUR_2CAPTCHA_KEY: z.string().nonempty()
})

const _env = schema.safeParse(process.env);

if(_env.success === false) {
  console.error("invalid environment param", );
  throw new Error("Invalid environment param");
}

export const env = _env.data;