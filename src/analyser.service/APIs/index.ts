import { analyseApiCreator } from "./analyse.api";

/**
 * API creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing all API methods
 */
export const apiCreator = (apiUrl: string) => {
    return {
        ...analyseApiCreator(apiUrl)
    };
};