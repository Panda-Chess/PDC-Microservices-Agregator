import { configType } from "./configType";
import { databaseService } from "./database.service";
import dotenv from "dotenv";

dotenv.config();


const config: configType = {
    database: process.env.DATABASE_SERVICE_URL,
};

export const {
    getUserById, getGames, deleteGame, getGameByUser, getUnstartedGames, modifyGame, createGame 
} = databaseService(config);