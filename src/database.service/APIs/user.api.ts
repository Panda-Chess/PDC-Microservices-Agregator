import { User } from "@panda-chess/pdc-core";
import axios from "axios";

/**
 * User API creator
 * 
 * @param {string} apiUrl The API URL
 * @returns {Object} An object containing user API methods
 */
export const userApiCreator = (apiUrl: string) => {
    /**
     * Get all users
     * 
     * @returns {Promise<User[]>} A promise that resolves to an array of users
     */
    const getUsers = async (): Promise<User[]> => {
        const response = await axios.get(apiUrl + "/users");
        return response.data;
    };

    /**
     * Get a user by id
     * 
     * @param {string} id The user id
     * @returns {Promise<User>} A promise that resolves to the user
     */
    const getUserById = async (id: string): Promise<User> => {
        const response = await axios.get(apiUrl + `/users/${id}`);
        return response.data;
    };

    const tryLogin = async (email: string, password: string): Promise<User> => {
        const response = await axios.post(apiUrl + "/users/try-login", {email, password});
        
        return response.data;
    };

    return {tryLogin, getUsers, getUserById};
};