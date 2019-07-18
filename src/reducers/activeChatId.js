import {EDIT_CHAT, CLEAR_ACTIVE} from '../Constants/action-types';

export default function activeUserId(state=null, action){
    switch (action.type){
        case EDIT_CHAT:
            return action.payload.number;
        case CLEAR_ACTIVE:
            return null;
        default:
        return state;
    }
    
}