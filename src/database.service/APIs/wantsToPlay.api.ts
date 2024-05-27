import { WantsToPlay } from "@panda-chess/pdc-core/dist/utils";
import axios from "axios";

export const wantsToPlayApiCreator = (apiUrl: string) => {

    const getPlayersWhoWantToPlay = async (): Promise<WantsToPlay[]> => {
        const response = await axios.get(apiUrl + "/wants-to-play/");
        return response.data;
    };

    const playerWantsToPlay = async (wantsToPlay: WantsToPlay): Promise<WantsToPlay> => {
        const response = await axios.post(apiUrl + "/wants-to-play/", { wantsToPlay });
        return response.data;
    };

    const playerDoesNotWantToPlay = async (wantsToPlayId: string): Promise<void> => {
        const response = await axios.delete(apiUrl + "/wants-to-play/" + wantsToPlayId);
        return response.data;
    };

    return {
        getPlayersWhoWantToPlay,
        playerWantsToPlay,
        playerDoesNotWantToPlay
    };
};