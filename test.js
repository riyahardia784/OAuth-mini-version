const generateState = require("./utils/generateState");
const { storeState } = require("./utils/stateStorage");
const createAuthUrl = require("./oauth/createAuthUrl");
const verifyState = require("./utils/verifyState");
const receiveAuthCode = require("./oauth/reciveAuthCode");
const exchangeCode = require("./oauth/exchangeCode");
const fetchUser = require("./oauth/fetchUser");

// Test 1
console.log("===== Test 1: Generate State =====");

const state = generateState();

console.log(state);

// Test 2
console.log("\n===== Test 2: Create Auth URL =====");

console.log(createAuthUrl(state));

// Test 3
console.log("\n===== Test 3: Verify State =====");

storeState(state);

console.log(verifyState(state));

// Test 4
console.log("\n===== Test 4: Invalid State =====");

console.log(verifyState("wrong_state"));

// Test 5
console.log("\n===== Test 5: Exchange Code =====");

const token = exchangeCode("github_auth_code");

console.log(token);

// Test 6
console.log("\n===== Test 6: Fetch User =====");

console.log(fetchUser(token.accessToken));

// Test 7
console.log("\n===== Test 7: Invalid Token =====");

console.log(fetchUser("invalid_token"));