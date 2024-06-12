import { ConfigType } from "../configType";
import { apiCreator } from "./APIs";

/**
 * Validator service creator
 * 
 * @param {ConfigType} serviceConfig The service configuration
 * @returns {Object} An object containing all API methods
 */
export const validatorServiceCreator = (serviceConfig: ConfigType) => {
    return apiCreator(serviceConfig.validateServiceUrl);
};