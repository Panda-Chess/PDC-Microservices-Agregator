import { ConfigType } from "../configType";
import { apiCreator } from "./APIs";

/**
 * Analyse service creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing all API methods
 */
export const analyseApiCreator = (serviceConfig: ConfigType) => {
    return apiCreator(serviceConfig.analyserServiceUrl);
};