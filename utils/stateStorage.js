
let state =null;
function  storeState( newState){
    state=newState;
}

function getState(){
    return state;
}

module.exports={ storeState,getState};
