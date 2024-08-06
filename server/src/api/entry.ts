import express, { type Router, Request, Response } from "express";
import { resolve } from "path";
// @ts-ignore
import { NlpManager } from "node-nlp";

export const entryRouter: Router = express.Router();

entryRouter.post("/", async (req: Request, res: Response) => {
  const { query } = req.body;
  try {
    const manager = new NlpManager();
    const modelPath = resolve(`${__dirname}/../train/model.nlp`);
    manager.load(modelPath);

    const response = await manager.process("en", query);
    console.log("nlp response=", response);
    return res.json(response.intent);
  } catch (error) {
    let errorMessage: string | null = null;

    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }

    console.log("entry for intent", errorMessage || "unkown");
    if (errorMessage) return res.status(500).json("No intent");
  }
});
