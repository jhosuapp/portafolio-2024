import { switchAction } from '../models/index';

const switchReducer = ( initialSwitch = false, action:switchAction ):boolean=>{
    switch(action.type){
        case '[SWITCH] enable/disable':
            const { status, id } = action.payload;
            const body = document.body;
            //Save status in local storage
            localStorage.setItem(id, JSON.stringify(status));
            //Add dinamic class
            status ? body.classList.add(id) : body.classList.remove(id);
            //Return status
            return action.payload.status;
        default: 
            return initialSwitch;
    }
}

export { switchReducer }