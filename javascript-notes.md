# JavaScript Notes (Learning by Thinking)

This document records my understanding, mistakes, and mental models while learning JavaScript.

**Goal:** Not just to remember syntax, but to understand how JavaScript works.

---

## 1. Function & Return

### 1.1 Parameters vs Arguments

**Key idea:**
- Parameters are variable names.
- Arguments are real values passed into a function.

**Example:**
```javascript
function convertCtoF(celsius) {
  return celsius * 9 / 5 + 32;
}

convertCtoF(26); // 26 is an argument
```

❌ **Wrong:**
```javascript
function convertCtoF(26) {}
```

**Reason:** `26` is not a valid variable name.

---

### 1.2 return vs console.log

- `return` → sends a value out of the function.
- `console.log` → prints something to the console.

**Example:**
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // prints 5
```

⚠️ **Common mistake:**
```javascript
return add; // returns the function itself, not the result
```

---

## 2. Strings & length

### 2.1 Using length correctly

❌ **Wrong:**
```javascript
username[length - 1]
```

✅ **Correct:**
```javascript
username[username.length - 1]
```

**Reason:**
- `length` belongs to the string object (`username.length`).
- `length` is not a global variable.

---

## 3. Email Masker Logic (Project Thinking)

### 3.1 Problem Description

Given an email like:
```text
apple.pie@example.com
```

We want to mask it into:
```text
a*******e@example.com
```

### 3.2 Step-by-step Logic

1. Find the position of `@`.
2. Split email into:
   - `username` (before `@`)
   - `domain` (including `@`)
3. Mask the username:
   - Keep first character
   - Keep last character
   - Replace middle characters with `*`
4. Combine masked username + domain.

### 3.3 Core Code Idea

```javascript
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const masked = username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];
  return masked + domain;
}
```

**Key thinking:**
- `indexOf("@")` → find boundary
- `slice` → split string
- `repeat` → generate stars

---

## 4. Translating English → JavaScript Logic

**Example 1**

English:
> annualIncome >= minIncome AND creditScore >= minCreditScore 

JavaScript:
```javascript
if (annualIncome >= minIncome && creditScore >= minCreditScore) {
  // logic
}
```

**Mapping:**

| English | JavaScript |
|---------|------------|
| AND     | `&&`       |
| OR      | `\|\|`     |
| NOT     | `!`        |

---

## 5. Common Mistakes I Made

### 5.1 Forgetting Parentheses

❌ **Wrong:**
```javascript
productName.toLowerCase;
```

✅ **Correct:**
```javascript
productName.toLowerCase();
```

**Reason:** `toLowerCase` is a function, not a property.

---

### 5.2 Returning the Wrong Thing

❌ **Wrong:**
```javascript
return maskEmail;
```

✅ **Correct:**
```javascript
return maskedEmail;
```

**Reason:**
- `maskEmail` is the function name.
- `maskedEmail` is the computed value.

---

## 6. Mental Model (How I Think About JS)

### Function = Machine

| Role    | Meaning              |
|---------|----------------------|
| Input   | Parameters           |
| Process | Code inside function |
| Output  | Return value         |

**Example:**
```
Input:   apple.pie@example.com
Process: mask username
Output:  a*******e@example.com
```

---

## 7. Patterns Worth Remembering

### Find Item in Array

```javascript
function findIndex(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return i;
    }
  }
  return -1;
}
```

**Meaning:**
- Return index if found.
- Return `-1` if not found.

---

## 8. My Learning Insight

I realized that coding is not about memorizing syntax, but about translating human language into logical steps.

---

*Continuous updates...*
