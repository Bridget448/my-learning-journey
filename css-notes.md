# CSS Notes

A concise summary of key CSS concepts, syntax, and best practices.

---

## 1. Selectors

### 1.1 Class Selectors

Use a dot (`.`) followed by the class name.

```css
.flavor {
  text-align: left;
  width: 75%;
}
```

### 1.2 Type Selectors

Use the element name directly.

```css
p {
  font-size: 16px;
}
```

### 1.3 Combining Selectors

Multiple class selectors in one rule: use a comma and space to apply styles to multiple classes.

```css
.flavor, .dessert {
  text-align: left;
  width: 75%;
}
```

Type selector within a class: no comma needed; use space to indicate nesting.

```css
.item p {
  display: inline-block;
}
```

Note: Commas separate distinct selectors (apply the same styles to each), while spaces indicate nested structure (targeting a type within a class).

---

## 2. Comments in CSS
CSS comments are used to explain your code or to leave notes for yourself or other developers. They do not affect how the CSS works and are ignored by the browser.

### 2.1 Syntax

```css
/* This is a comment */
```

**Examples:**

```css
/* Set background color for the body */
body {
  background-color: #f0f0f0;
}

/* Make the text bold */
strong {
  font-weight: bold;
}
```

### 2.2 Rules

- Comments must start with `/*` and end with `*/`.
- You can place comments on their own lines or after a declaration on the same line.
- HTML-style comments (`<!-- -->`) do not work in CSS.

---
