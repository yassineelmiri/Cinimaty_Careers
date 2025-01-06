import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";

export default function logger(){
    const app = NestFactory.create(AppModule, {
        logger: false,
      });
}