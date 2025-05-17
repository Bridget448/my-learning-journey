# HTML Notes

## 1. What is HTML?

HTML (HyperText Markup Language) is the standard language used to create web pages. It describes the **structure** and **content** of a webpage using a system of elements defined by tags.

---

## 2. Elements and Tags

- **Element**: The complete HTML structure, including the opening tag, content, and closing tag.  
  Example: `<p>Hello</p>` is a paragraph element.
- **Tag**: The specific markup enclosed in angle brackets, used to define an element.  
  Example: `<p>` and `</p>` are opening and closing tags.
- **Void elements**: Elements that don’t require closing tags.  
  Example: `<img>`, `<br>`, `<hr>`

---

## 3. Basic Structure of an HTML Page

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
---

## 4. Common Tags

| Tag                                    | Purpose                                     |
|----------------------------------------|---------------------------------------------|
| `<h1>` ~ `<h6>`                        | Headings (largest to smallest)              |
| `<p>`                                  | Paragraph                                   |
| `<a>`                                  | Anchor / Link (uses `href`, `target`)       |
| `<img>`                                | Image (uses `src`, `alt`)                   |
| `<ul>`, `<ol>`, `<li>`                 | Lists: unordered, ordered, and list items   |
| `<div>`                                | Block-level container                       |
| `<span>`                               | Inline container                            |
| `<input>`, `<label>`, `<button>`       | Form-related elements                       |
| `<section>`, `<article>`, `<header>`, `<footer>` | Semantic layout tags               |

---

## 5. Common Attributes

| Attribute | Description |
|-----------|-------------|
| `href`    | URL destination for links |
| `src`     | Source path for images or media |
| `alt`     | Alternative text for images |
| `target`  | Determines how a link opens (e.g., `_blank`) |
| `id`      | Unique identifier for an element |
| `class`   | CSS class name for styling |
| `type`    | Type of input (e.g., `text`, `checkbox`) |
| `name`    | Name of form field (used in form submission) |
| `value`   | Default or submitted value for input fields |
| `checked` | Pre-selects a checkbox or radio button |

### 5.1 Attribute Syntax

In HTML, all attributes must appear in the **opening tag** of an element.  
Attributes are written as `name="value"` pairs and separated by spaces.  
They provide additional information about the element, such as its class, ID, or behavior.

**Example:**

```html
<p class="flavor">French Vanilla</p>
```
In the example above, class="flavor" is an attribute placed inside the opening <p> tag.

---

## 6. Comments

In HTML, comments are used to leave notes or explanations in the code. They are not displayed in the browser.

### 6.1 Syntax

```html
<!-- This is a comment -->
```

---

## 7. Block vs Inline Elements

In HTML, elements are categorized as either **block-level** or **inline**.

### 7.1 Block-level Elements

- Start on a new line.  
- Take up the full width of the container.  
- Often used for larger structural elements.

**Examples:**

```html
<div>...</div>
<p>...</p>
<h1>...</h1>
<ul>...</ul>
<section>...</section>
```

### 7.2 Inline Elements

- Do not start on a new line.
- Only take up as much width as needed.
- Commonly used inside block elements for styling or smaller structure.

**Examples:**
```html
<span>...</span>
<a>...</a>
<strong>...</strong>
<img>
```

---

## 8. Best Practices

- Always use lowercase for tags.  
- Close all tags properly (except for void elements).  
- Use semantic HTML whenever possible.  
- Avoid incorrect nesting (no overlapping tags).
