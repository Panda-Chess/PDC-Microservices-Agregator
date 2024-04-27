import fs from "fs";
import { configType } from "./configType";
import { databaseService } from "./database.service";

if (!fs.existsSync("microservices.conf.json")) {
    throw new Error("No configuration file found");
}

const file = fs.readFileSync("microservices.conf.json", "utf8");
const config: configType = JSON.parse(file);

export const {
    getUserById, getGames, deleteGame, getGameByUser, getUnstartedGames, modifyGame, createGame 
} = databaseService(config);