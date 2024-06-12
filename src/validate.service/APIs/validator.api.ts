import { Move } from "@panda-chess/pdc-core";
import axios from "axios";

/**
 * Validate API creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing analyse API methods
 */
export const validatorApiCreator = (apiUrl: string) => {
    /**
        * Validate a move
        * 
        * @param { string } gameId The game id
        * @param { Move } move The move to analyse
        * @returns { Promise<Number> } A promise that resolves to the analysis
    */
    const validateMove = async (gameId: string, move: Move): Promise<number> => {
        const response = await axios.post(apiUrl + "/validate/", { gameId, move });
        return response.data;
    };

    return {
        validateMove
    };
};