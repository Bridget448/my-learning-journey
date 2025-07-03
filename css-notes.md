# CSS Notes

A concise summary of key CSS concepts, syntax, and best practices.

---

## 1. CSS Selectors

| Selector        | Purpose                                                | Example                        |
|-----------------|--------------------------------------------------------|--------------------------------|
| `*`             | Universal selector (selects all elements)             | `* { margin: 0; padding: 0; }` |
| `.class`        | Select elements by class name                         | `.container {}`                |
| `#id`           | Select element by ID                                  | `#header {}`                   |
| `element`       | Type selector for HTML elements                       | `p {}`                         |
| `element1 element2` | Descendant selector                          | `.wrapper p {}`                |
| `element1 > element2` | Direct child selector                        | `ul > li {}`                   |
| `a:hover`       | Pseudo-class selector for hover states                | `a:hover { color: red; }`      |
| `::before`, `::after` | Pseudo-elements for inserting virtual content | `::before {}`                  |

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

## 3. Reset and Normalize

Use this rule at the top of your CSS to normalize spacing and box models across browsers:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## 4. Layout

### 4.1 Display

Common display values:

- `block`
- `inline`
- `inline-block`
- `none`
- `flex`
- `grid`

### 4.2 Flexbox Basics

```css
display: flex;
justify-content: center;  /* horizontal alignment */
align-items: center;      /* vertical alignment */
```

### 4.3 Grid Basics

```css
display: grid;
grid-template-columns: 1fr 2fr;
gap: 1rem;
```

- 1fr 2fr means the first column takes one part, and the second takes two parts of the remaining space.
- `gap` adds spacing between grid items.

---

## 5. Responsive Design

### 5.1 Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 5.2 Media Queries

**Responsive design rule example:**

```css
@media only screen and (max-width: 720px) {
  .image-wrapper {
    grid-template-columns: 1fr;
  }
}
```

**Common Breakpoints for Responsive Design:**

To ensure your webpage adapts well to different device widths (desktop, tablet, and mobile), consider using the following universal structure:

```css
/* Large screens (desktops, 1025px and above) */
@media (min-width: 1025px) {
  body {
    font-size: 1rem;
  }

  .navbar {
    flex-direction: row;
    justify-content: space-between;
  }

  .project-tile {
    width: 30%;
  }
}

/* Tablets (769px to 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  body {
    font-size: 0.95rem;
  }

  .navbar {
    flex-direction: row;
    justify-content: center;
  }

  .project-tile {
    width: 45%;
  }

  .contact-icons {
    gap: 1.5rem;
  }
}

/* Mobile devices (768px and below) */
@media (max-width: 768px) {
  body {
    font-size: 0.9rem;
  }

  #navbar {
    flex-direction: column;
    align-items: center;
  }

  .project-tile {
    width: 90%;
    margin-bottom: 2rem;
  }

  .contact-icons {
    flex-direction: column;
    gap: 1rem;
  }

  #welcome-section h1 {
    font-size: 2rem;
  }

  #welcome-section p {
    font-size: 1rem;
  }
}
```

Tip:
- The structure can remain consistent across projects, but actual values (like font sizes or element widths) should be tailored based on your design needs.

---

## 6. Typography and Colors

```css
body {
  font-family: Baskervville, serif;
  color: linen;
  background-color: rgb(20, 30, 40);
}
```

- Use **fallback fonts** after the custom font to ensure text renders properly if the custom font fails to load.
- `color`: Sets the **text color**.
- `background-color`: Sets the **background color** of the element.

---

## 7. Common Properties

| Property            | Description                                   |
| ------------------- | --------------------------------------------- |
| `margin`, `padding` | Spacing outside/inside elements               |
| `color`             | Text color                                    |
| `background-color`  | Element background                            |
| `font-family`       | Text font                                     |
| `font-size`         | Size of text                                  |
| `text-align`        | Horizontal alignment (`left`, `center`, etc.) |
| `line-height`       | Vertical spacing between lines of text        |

---

## 8. Centering in CSS

There are several commonly used CSS properties to center elements. Which one to use depends on the layout type and the element you want to center.

| Property                  | Requires Flex/Grid? | Axis         | Targets                  | Typical Use Case                                      |
|---------------------------|---------------------|--------------|---------------------------|--------------------------------------------------------|
| `text-align: center`      | No               | Horizontal   | Inline or inline-block    | Centering text or links inside a block element        |
| `justify-content: center` | Yes (Flex/Grid)  | Main axis    | All direct children       | Centering a group of elements inside a flex/grid box  |
| `align-items: center`     | Yes (Flex/Grid)  | Cross axis   | All direct children       | Vertically centering items in a flex/grid container   |
| `justify-content: flex-end` | Yes (Flex/Grid) | Main axis (end) | All direct children     | Aligning items to the right (or bottom)              |

Tip:
- For `justify-content` and `align-items` to work, you must set `display: flex` or `display: grid` on the container.
- In regular document flow (non-flex), use `text-align` for inline content.

---

## 9. Horizontal Rule (`<hr>`)

- The `<hr>` tag can be styled with `margin` to create space before and after the horizontal rule.

```css
hr {
  margin: 1.5rem 0;
}
```
