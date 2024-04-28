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
    console.log("\x1b[31m", "\nNo config file found. Using default configuration.\n");
}


const serviceConfig: ConfigType = {
    databaseServiceUrl: config?.databaseServiceUrl || defaultConfig.databaseServiceUrl,
};

for (const key in serviceConfig) {
    console.log("\x1b[34m", `Service config: ${key}: ${Object.getOwnPropertyDescriptor(serviceConfig, key)?.value}`);
}

export const databaseService = databaseServiceCreator(serviceConfig);