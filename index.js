const generateState = require("./utils/generateState");
const { storeState } = require("./utils/stateStorage");
const createAuthUrl = require("./oauth/createAuthUrl");
const verifyState = require("./utils/verifyState");
const reciveAuthCode = require("./oauth/reciveAuthCode");
const exchangeCode = require('./oauth/exchangeCode');
const fetchUser=require('./oauth/fetchUser');

const state = generateState();


storeState(state);

const url = createAuthUrl(state);

console.log("Redirect User To:");

console.log(url);

console.log("---------------------");

// GitHub redirects back

const callback = reciveAuthCode(state);

console.log(callback);

// Verify State
if(verifyState(callback.state)){
   const token = exchangeCode(callback.code);

    console.log(token);
    
     // Fetch User Profile
    const user = fetchUser(token.accessToken);

    if (user.success) {
        console.log("GitHub User:");
        console.log(user.user);
    } else {
        console.log(user.message);
    }
} else {

    console.log("OAuth Login Failed");

}


