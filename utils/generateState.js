const crypto=require('crypto');

function generateState() {
 const bytes= crypto.randomBytes(16);
  return bytes.toString('base64url');
 
 
}

module.exports=generateState;