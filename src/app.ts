import * as bodyParser from "body-parser";
import * as express from "express";
import { MainRoutes } from "./routes/MainRoutes";
import logger from "./utils/logger";
import * as mongoose from "mongoose";

class App {
  public app: express.Application = express();
  public routeProv: MainRoutes = new MainRoutes();

  constructor() {
    this.config();
    this._mongoConnection();
    this.routeProv.routes(this.app);
  }

  private config(): void {
    this.app.set(process.env.VIEW_ENGINE, process.env.TEMPLATE_ENGINE);
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
  }

  private _mongoConnection(): void {
    // @ts-ignore
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_URL,
        {
          connectTimeoutMS: 0,
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
        )
        .then(r => {

          logger.info('Connected to mongodb')
        })
        .catch( err => {
          logger.error(err.message)
        })

  }
}
export default new App().app;
