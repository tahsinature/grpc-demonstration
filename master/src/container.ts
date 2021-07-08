import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { kickGrpcServer } from "./grpc/server";
import { startGrpcServices } from "./grpc/services";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

class Container {
  public readonly app = app;

  public async load() {
    startGrpcServices();
    kickGrpcServer();
  }

  public async stop() {}
}

export = Container;
