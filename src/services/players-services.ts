import * as PlayerRepository  from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async ()=>{
    const data = await PlayerRepository.findAllPlayers();
    let response = null;
    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
   
    return response;
};

export const getPlayerByIdService = async(id: number)=>{
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = ok(data);
    }else{
        response = noContent();
    }
    return response;
};