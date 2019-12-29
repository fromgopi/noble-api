import {MainController} from "../controllers/MainController";
import logger from "../utils/logger";

export class MainRoutes {

    public mainController: MainController = new MainController();
    public routes(app): void {
        logger.info("Inside routes.");
        app.route('/')
            .get(this.mainController.root);
    }
}
