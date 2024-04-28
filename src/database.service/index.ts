import { ConfigType } from "../configType";
import { apiCreator } from "./APIs";

/**
 * Database service creator
 * 
 * @param {ConfigType} serviceConfig The service configuration
 * @returns {Object} An object containing all API methods
 */
export const databaseServiceCreator = (serviceConfig: ConfigType) => {
    return apiCreator(serviceConfig.databaseServiceUrl);
};