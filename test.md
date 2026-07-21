# OAuth Mini Version – Test Cases

This document contains the manual test cases used to validate the OAuth Mini Version implementation.

---

# Test Case 1 – Generate State

### Objective

Verify that a secure random OAuth State is generated.

### Input

```text
generateState()
```

### Expected Result

* Returns a random string.
* State should not be empty.
* Every execution should generate a different value.

### Actual Result

```text
b9kO6mFglUlpm3Pl0RNpLg
```

### Status

✅ PASS

---

# Test Case 2 – Create Authorization URL

### Objective

Verify that the GitHub Authorization URL is created correctly.

### Input

```text
createAuthUrl(state)
```

### Expected Result

URL contains:

* client_id
* redirect_url
* scope
* state

### Actual Result

```text
http://github.com/login/oauth/authorize?client_id=abc1234&redirect_url=http://localhost:3000/callback&Scope=read:user&State=b9kO6mFglUlpm3Pl0RNpLg
```

### Status

✅ PASS

---

# Test Case 3 – Verify Valid State

### Objective

Ensure the received State matches the stored State.

### Input

```text
Stored State = Generated State
Received State = Generated State
```

### Expected Result

```text
Verified
true
```

### Actual Result

```text
Verified
true
```

### Status

✅ PASS

---

# Test Case 4 – Verify Invalid State

### Objective

Reject an invalid OAuth State.

### Input

```text
Received State = wrong_state
```

### Expected Result

```text
Invalid State
false
```

### Actual Result

```text
Invalid State
false
```

### Status

✅ PASS

---

# Test Case 5 – Exchange Authorization Code

### Objective

Exchange the Authorization Code for an Access Token.

### Input

```text
github_auth_code
```

### Expected Result

```text
{
  accessToken: "gho_123456789abcdef"
}
```

### Actual Result

```text
{
  accessToken: "gho_123456789abcdef"
}
```

### Status

✅ PASS

---

# Test Case 6 – Fetch User Profile

### Objective

Fetch the GitHub user profile using a valid Access Token.

### Input

```text
gho_123456789abcdef
```

### Expected Result

```text
{
  success: true,
  user: {
    id: "12345",
    username: "jhon due",
    email: "jonedue123@gmail.com"
  }
}
```

### Actual Result

```text
{
  success: true,
  user: {
    id: "12345",
    username: "jhon due",
    email: "jonedue123@gmail.com"
  }
}
```

### Status

✅ PASS

---

# Test Case 7 – Invalid Access Token

### Objective

Ensure invalid Access Tokens are rejected.

### Input

```text
invalid_token
```

### Expected Result

```text
{
  success: false,
  message: "Invalid Access Token"
}
```

### Actual Result

```text
{
  success: false,
  message: "Invalid Access Token"
}
```

### Status

✅ PASS

---

# Test Summary

| Test Case                   | Status |
| --------------------------- | ------ |
| Generate State              | ✅ PASS |
| Create Authorization URL    | ✅ PASS |
| Verify Valid State          | ✅ PASS |
| Verify Invalid State        | ✅ PASS |
| Exchange Authorization Code | ✅ PASS |
| Fetch User Profile          | ✅ PASS |
| Invalid Access Token        | ✅ PASS |

---

# Overall Result

```text
Total Test Cases : 7


Passed : 7

Failed : 0
Success Rate : 100%
```

The OAuth Mini Version successfully simulates the complete OAuth 2.0 Authorization Code Flow using fake GitHub data. All implemented features behave as expected.
