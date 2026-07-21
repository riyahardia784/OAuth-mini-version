# OAuth Mini Version (From Scratch)

A beginner-friendly implementation of the **OAuth 2.0 Authorization Code Flow** built completely from scratch in Node.js **without using Passport.js, OAuth libraries, or external authentication packages**.

> **Note:** This project is for learning purposes. It simulates GitHub OAuth to demonstrate how the OAuth flow works internally.

---

# Features

* Generate a secure OAuth State
* Store and verify State (CSRF protection)
* Create GitHub Authorization URL
* Simulate GitHub Login
* Receive Authorization Code
* Exchange Authorization Code for Access Token
* Fetch GitHub User Profile
* Manual Test Cases

---

# Project Structure

```text
oauth-mini-version/
│
├── oauth/
│   ├── createAuthUrl.js
│   ├── reciveAuthCode.js
│   ├── exchangeCode.js
│   └── fetchUser.js
│
├── simulator/
│   └── fakeGithub.js
│
├── utils/
│   ├── generateState.js
│   ├── stateStorage.js
│   └── verifyState.js
│
├── index.js
├── test.js
├── README.md
└── TEST_CASES.md
```

---

# OAuth Flow

```text
User
 │
 ▼
Generate State
 │
 ▼
Store State
 │
 ▼
Create Authorization URL
 │
 ▼
Redirect User to GitHub
 │
 ▼
GitHub Login (Simulated)
 │
 ▼
Receive Authorization Code
 │
 ▼
Verify State
 │
 ▼
Exchange Authorization Code
 │
 ▼
Receive Access Token
 │
 ▼
Fetch User Profile
 │
 ▼
Login Successful
```

---

# Example Output

```text
Redirect User To:

http://github.com/login/oauth/authorize?client_id=abc1234&redirect_url=http://localhost:3000/callback&Scope=read:user&State=abc123

---------------------

{
  code: "github_auth_code",
  state: "abc123"
}

Verified

{
  accessToken: "gho_123456789abcdef"
}

GitHub User

{
  id: "12345",
  username: "john_doe",
  email: "johndoe123@gmail.com"
}
```

---

# How to Run

Clone the repository.

```bash
git clone https://github.com/riyahardia784/OAuth-mini-version.git
```

Go to the project directory.

```bash
cd oauth-mini-version
```

Run the OAuth simulation.

```bash
node index.js
```

Run all test cases.

```bash
node test.js
```

---

# Test Cases

This project includes manual test cases covering:

* Generate State
* Create Authorization URL
* Verify Valid State
* Verify Invalid State
* Exchange Authorization Code
* Fetch User (Valid Token)
* Fetch User (Invalid Token)

See [Test Cases](./test.md)for detailed information.

---

# Learning Outcomes

After completing this project you will understand:

* What OAuth 2.0 is
* Why OAuth uses State
* How CSRF protection works
* Authorization Code Flow
* Access Token generation
* Fetching user information
* OAuth request lifecycle
* OAuth architecture

---

# Limitations

This is a learning implementation.

It does **not** include:

* Real GitHub OAuth
* Passport.js
* Express Server
* Refresh Tokens
* Token Revocation
* Database Integration
* Session Management

The GitHub server and API are simulated using fake data.

---

# Future Improvements

* Integrate Real GitHub OAuth
* Express Callback Route
* Real Access Token Exchange
* Fetch User from GitHub API
* JWT Authentication
* Store Users in Database
* Refresh Token Support
* Logout Flow

---

# Tech Stack

* Node.js
* JavaScript
* Crypto Module
* OAuth 2.0 (Authorization Code Flow)

---

# License

This project is intended for educational purposes.
