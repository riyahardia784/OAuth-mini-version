
function exchangeCode(code){

        if(code!=="github_auth_code"){
            console.log('Invalid Authriztion code ');
            return  null;
        }
        return {
            accessToken:"gho_123456789abcdef"
        };
    

}

module.exports=exchangeCode;