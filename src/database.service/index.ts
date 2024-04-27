import { configType } from "../configType";
import { callers } from "./callers";

export const databaseService = (configFile: configType) => {
    if (!configFile.database) {
        throw new Error("No database URL configuration found");
    }

    return {...callers(configFile.database)};
};