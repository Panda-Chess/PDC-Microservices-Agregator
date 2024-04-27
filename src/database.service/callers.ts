import { Game, User } from "@panda-chess/pdc-core";
import axios from "axios";

export const callers = (baseUrl: string) => {
    const getUserById = async (id: string): Promise<User> => {
        const response = await axios.get(baseUrl + `/users/${id}`);
        return response.data;
    };

    const getGames = async (): Promise<Game[]> => {
        const response = await axios.get(baseUrl + "/games");
        return response.data;
    };

    const deleteGame = async (game: Game) => {
        const response = await axios.delete(baseUrl + "/games/" + game._id);
        return response.data;
    };

    const getGameByUser = async (userId: string): Promise<Game> => {
        const response = await axios.get(baseUrl + "/games/game-by-user/" + userId);
        return response.data;
    };

    const getUnstartedGames = async (gameType: "casual" | "competitive"): Promise<Game[]> => {
        const response = await axios.get(baseUrl + "/games/unstarted-games/" + gameType);
        return response.data;
    };

    const modifyGame = async (game: Game) => {
        const response = await axios.put(baseUrl + "/games/" + game._id, game);
        return response.data;
    };

    const createGame = async (game: Game) => {
        const response = await axios.post(baseUrl + "/games", game);
        return response.data;
    };

    return {
        getUserById,
        getGames,
        deleteGame,
        getGameByUser,
        getUnstartedGames,
        modifyGame,
        createGame,
    };
};