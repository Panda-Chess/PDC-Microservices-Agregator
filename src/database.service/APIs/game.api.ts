import { Game } from "@panda-chess/pdc-core";
import axios from "axios";

/**
 * Game API creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing game API methods
 */
export const gameApiCreator = (apiUrl: string) => {

    /**
     * Get a game by id
     * 
     * @param {string} gameId The game id
     * @returns {Promise<Game>} A promise that resolves to the game
     */
    const getGameById = async (gameId: string): Promise<Game> => {
        const response = await axios.get(apiUrl + "/games/" + gameId);
        return response.data;
    };

    /**
     * Get all games
     * 
     * @returns {Promise<Game[]>} A promise that resolves to an array of games
     */
    const getGames = async (): Promise<Game[]> => {
        const response = await axios.get(apiUrl + "/games");
        return response.data;
    };

    /**
     * Delete a game
     * 
     * @param {Game} game The game to delete
     * @returns {Promise<Game>} A promise that resolves to the deleted game
     */
    const deleteGame = async (gameId: string) => {
        const response = await axios.delete(apiUrl + "/games/" + gameId);
        return response.data;
    };

    /**
     * Get a game by user
     * 
     * @param {string} userId The user id
     * @returns {Promise<Game>} A promise that resolves to the game
     */
    const getGameByUser = async (userId: string): Promise<Game | null> => {
        const response = await axios.get(apiUrl + "/games/game-by-user/" + userId);
        return response.data;
    };

    /**
     * Get a game that has a single player that is waiting for an opponent
     * 
     * @param {"casual" | "competitive"} gameType The game type
     * @returns {Promise<Game[]>} A promise that resolves to an array of games
     */
    const getUnstartedGames = async (gameType: "casual" | "competitive"): Promise<Game[]> => {
        const response = await axios.get(apiUrl + "/games/unstarted-games/" + gameType);
        return response.data;
    };

    /**
     * Modify a game
     * 
     * @param {Game} game The game to modify
     * @returns {Promise<Game>} A promise that resolves to the modified game
     */
    const modifyGame = async (game: Game): Promise<Game> => {
        const response = await axios.put(apiUrl + "/games/" + game._id, game);
        return response.data;
    };

    /**
     * Create a game
     * 
     * @param {Game} game The game to create
     * @returns {Promise<Game>} A promise that resolves to the created game
     */
    const createGame = async (game: Game): Promise<Game> => {
        const response = await axios.post(apiUrl + "/games", game);
        return response.data;
    };

    return {
        getGameById,
        getGames,
        deleteGame,
        getGameByUser,
        getUnstartedGames,
        modifyGame,
        createGame,
    };
};