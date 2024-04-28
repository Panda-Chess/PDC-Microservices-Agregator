import dotenv from "dotenv";
import { ConfigType } from "./configType";
import { databaseServiceCreator } from "./database.service";

dotenv.config();

const serviceConfig: ConfigType = {
    databaseServiceUrl: process.env.DATABASE_SERVICE_URL,
};

export const databaseService = databaseServiceCreator(serviceConfig);