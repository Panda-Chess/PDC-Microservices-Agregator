import { callers } from "./callers";
import dotenv from "dotenv";

dotenv.config();

const databaseServiceUrl = process.env.DATABASE_SERVICE_URL;

if (!databaseServiceUrl) {
    throw new Error("Environment variable DATABASE_SERVICE_URL is not set.");
}

export const {
    createGame,
    deleteGame,
    getGameByUser,
    getGames,
    getUnstartedGames,
    getUserById,
    modifyGame
} = callers(databaseServiceUrl);