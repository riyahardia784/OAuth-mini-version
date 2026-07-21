const fakeData= require('../simulator/fakeGithub');

function fetchUser(accessToken){

    if(accessToken!=='gho_123456789abcdef'){
        return {
            success: false,
            message: "Invalid Access Token"
        };
    }
      return {
        success: true,
        user: fakeData.user
    };

}
module.exports=fetchUser;