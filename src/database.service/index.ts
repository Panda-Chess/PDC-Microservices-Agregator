import { ConfigType } from "../configType";
import { callers } from "./callers";

export const databaseServiceCreator = (serviceConfig: ConfigType) => {
    if (!serviceConfig.databaseServiceUrl) {
        throw new Error("Environment variable DATABASE_SERVICE_URL is not set.");
    }

    return callers(serviceConfig.databaseServiceUrl);
};