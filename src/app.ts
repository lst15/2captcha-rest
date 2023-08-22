import express from "express";
import cors from "cors";
import { BypassCaptchaRoutes } from "./http/routes/bypass-captcha.routes";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "*",
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	})
);

BypassCaptchaRoutes(app);