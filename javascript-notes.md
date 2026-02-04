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

### 1.3 Multiple Returns in One Function

**Key insight:**
- A function can contain multiple `return` statements, but only one will be executed per call.
- Once a `return` runs, the function stops executing immediately.

**Example:**
```javascript
function checkNumber(n) {
  if (n > 0) {
    return "positive";
  }
  return "not positive";
}
```

**Explanation:**
- The function has more than one `return`.
- Only one `return` will be executed each time.
- Code after `return` will not run.

---

## 2. Operators

### 2.1 % Operator (Remainder)

- The `%` symbol in JavaScript represents the **remainder** of division.

**Example:**
```javascript
7 % 4  // returns 3
8 % 2  // returns 0 (divisible)
```

---

## 3. Strings & length

### 3.1 Using length correctly

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

## 4. Logic & Conditionals

### 4.1 Translating English → JavaScript Logic

**Example:**

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

### 4.2 if + unless + unless (Logic Priority Pattern)

**Key insight:**
- Some English instructions describe conditions as "if + unless + unless".
- In JavaScript, the last "unless" (the most specific exception) must be checked **first**.
- This creates a **priority order**: special cases are checked before general rules.
- Conceptually, it's a pattern of **nested conditions + exception override**.

**Example pattern:**
```javascript
if (specialCase) {
  // handle the exception first
} else if (nextCase) {
  // handle the next exception
} else if (generalCase) {
  // handle the normal rule
} else {
  // fallback
}
```

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

### 7.1 Find Item in Array

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

### 7.2 Email Masker Pattern

**Problem:** Mask an email like `apple.pie@example.com` → `a*******e@example.com`

**Step-by-step logic:**
1. Find the position of `@`.
2. Split email into username and domain.
3. Mask the username: keep first and last characters, replace middle with `*`.
4. Combine masked username + domain.

**Code:**
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

## 8. My Learning Insight

I realized that coding is not about memorizing syntax, but about translating human language into logical steps.

---

*Continuous updates...*
