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

## 2. More Sections Coming...
(We'll continue adding more content together!)
