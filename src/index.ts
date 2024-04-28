import dotenv from "dotenv";
import fs from "fs";
import { ConfigType } from "./configType";
import { databaseServiceCreator } from "./database.service";
import { defaultConfig } from "./defaultConfig";

dotenv.config();

let configFile;
let config: ConfigType | null = null;

try{
    configFile = fs.readFileSync("microservices.config.json");
    config = JSON.parse(configFile.toString());
}
catch (error){
    console.error("No config file found. Using default configuration.");
}


const serviceConfig: ConfigType = {
    databaseServiceUrl: config?.databaseServiceUrl || defaultConfig.databaseServiceUrl,
};

for (const key in serviceConfig) {
    console.log(`Service config: ${key}: ${Object.getOwnPropertyDescriptor(serviceConfig, key)?.value}`);
}

export const databaseService = databaseServiceCreator(serviceConfig);