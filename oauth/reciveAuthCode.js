
function reciveAuthCode(state){

    return {
        code : "github_auth_code",
        state
    }

}

module.exports=reciveAuthCode;