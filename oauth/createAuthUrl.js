
function createAuthUrl(state){

    const clientId="abc1234";
    const scope="read:user"
    const redirect="http://localhost:3000/callback";

    const url =
    'http://github.com/login/oauth/authorize'+
    '?client_id='+clientId+
    '&redirect_url='+redirect+
    '&Scope='+scope+
    '&State='+state;

    return url;

}

module.exports=createAuthUrl;