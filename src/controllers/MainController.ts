import { Request, Response } from "express";

export class MainController {
  public root(req: Request, res: Response) {
    res.render('index');
  }
}

export const mainController = new MainController();
