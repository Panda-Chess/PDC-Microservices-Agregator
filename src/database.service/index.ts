import { configType } from "../configType";
import { callers } from "./callers";

export const databaseService = (configFile: configType) => {
    if (!configFile.database) {
        throw new Error("Environment variable DATABASE_SERVICE_URL is not set.");
    }

    return {...callers(configFile.database)};
};