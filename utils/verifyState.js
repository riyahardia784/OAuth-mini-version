const { getState } = require("./stateStorage");

function verifyState(recivedState){

    const storeState=getState();

    if(recivedState==storeState){
        console.log('Verified ');
        return true;
    }else{
        console.log("Invalid State");
        return false;
    }

}

module.exports=verifyState;