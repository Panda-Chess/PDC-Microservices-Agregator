import dotenv from "dotenv";
import fs from "fs";
import { ConfigType } from "./configType";
import { databaseServiceCreator } from "./database.service";
import { defaultConfig } from "./defaultConfig";

dotenv.config();

const configFile = fs.readFileSync("microservices.config.json");

const config: ConfigType = JSON.parse(configFile.toString());

const serviceConfig: ConfigType = {
    databaseServiceUrl: config.databaseServiceUrl || defaultConfig.databaseServiceUrl,
};

export const databaseService = databaseServiceCreator(serviceConfig);