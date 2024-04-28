import { ConfigType } from "../configType";
import { apiCreator } from "./APIs";

/**
 * Database service creator
 * 
 * @param {ConfigType} serviceConfig The service configuration
 * @returns {Object} An object containing all API methods
 */
export const databaseServiceCreator = (serviceConfig: ConfigType) => {
    if (!serviceConfig.databaseServiceUrl) {
        throw new Error("Environment variable DATABASE_SERVICE_URL is not set.");
    }

    return apiCreator(serviceConfig.databaseServiceUrl);
};