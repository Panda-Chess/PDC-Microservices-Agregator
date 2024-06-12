import { validatorApiCreator } from "./validator.api";

/**
 * API creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing all API methods
 */
export const apiCreator = (apiUrl: string) => {
    return {
        ...validatorApiCreator(apiUrl)
    };
};