import * as bodyParser from "body-parser";
import * as express from "express";
import { MainRoutes } from "./routes/MainRoutes";

class App {
  public app: express.Application = express();
  public routeProv: MainRoutes = new MainRoutes();

  constructor() {
    this.config();
    this.routeProv.routes(this.app);
  }

  private config(): void {
    this.app.set("view engine", "ejs");
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
  }
}
export default new App().app;
