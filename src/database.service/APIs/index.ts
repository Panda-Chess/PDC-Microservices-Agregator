import { gameApiCreator } from "./game.api";
import { userApiCreator } from "./user.api";

/**
 * API creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing all API methods
 */
export const apiCreator = (apiUrl: string) => {
    return {
        ...userApiCreator(apiUrl),
        ...gameApiCreator(apiUrl),
    };
};