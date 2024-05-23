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

    /**
     * Try to login
     * 
     * @param {string} email The user email
     * @param {string} password The user password
     * @returns {Promise<User>} A promise that resolves to the user
     */
    const tryLogin = async (email: string, password: string): Promise<User> => {
        const response = await axios.post(apiUrl + "/users/try-login", { email, password });

        return response.data;
    };

    /**
     * Create a user
     * 
     * @param {User} user The user to create
     * @returns {Promise<User>} A promise that resolves to the created user
     */
    const createUser = async (user: User): Promise<User> => {
        const response = await axios.post(apiUrl + "/users", user);
        return response.data;
    };

    /**
     * Update a user
     * 
     * @param {User} user The user to update
     * @returns {Promise<User>} A promise that resolves to the updated user
     */
    const updateUser = async (user: User): Promise<User> => {
        const response = await axios.put(apiUrl + "/users", user);
        return response.data;
    };

    /**
     * Delete a user
     * 
     * @param {string} id The user id
     * @returns {Promise<void>} A promise that resolves when the user is deleted
     */
    const deleteUser = async (id: string): Promise<void> => {
        await axios.delete(apiUrl + `/users/${id}`);
    };

    /**
     * Get online users
     * 
     * @returns {Promise<User[]>} A promise that resolves to an array of online users
     */
    const getOnlineUsers = async (): Promise<User[]> => {
        const response = await axios.get(apiUrl + "/users/online");
        return response.data;
    };

    return {
        tryLogin, getUsers, getUserById, createUser, updateUser, deleteUser, getOnlineUsers
    };
};