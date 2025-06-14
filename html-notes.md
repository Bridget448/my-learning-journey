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

## 8. Form Controls

### 8.1 Common Form Elements and Attributes

#### 8.1.1 `<label>` Element

**Purpose:**  
Describes form inputs, improves accessibility, and allows users to click the label to focus the associated input.

**Syntax (two ways):**

```html
<!-- Method 1: Associate via for/id -->
<label for="email">Email:</label>
<input id="email" type="email">

<!-- Method 2: Wrap the input inside the label -->
<label>
  <input type="checkbox" value="cat"> I like cats
</label>
```

**Usage Scenarios**

| Use Case                            | Recommended Syntax       |
| ----------------------------------- | ------------------------ |
| Text inputs, email, number, etc.    | `for` + `id`             |
| Checkbox or radio groups            | Wrap input inside label  |
| Complex form layout/styling needed  | `for` + `id`             |
| Prioritizing accessibility          | `for` + `id`             |

**Notes**
- Wrapping inputs in a label is quicker and doesn't require IDs, but is less flexible for styling.  
- Using `for` + `id` gives better control and screen reader compatibility.  
- You can combine both approaches as needed in one form.

#### 8.1.2 `<input>` Element

The `<input>` element is a versatile form control. Different `type` values define its behavior:

| `type` value | Purpose                               | Example                                             |
| ------------ | ------------------------------------- | --------------------------------------------------- |
| `text`       | Single-line text input                | `<input type="text">`                               |
| `email`      | Email input with built-in validation  | `<input type="email" required>`                     |
| `number`     | Number input with optional range      | `<input type="number" min="13" max="130">`          |
| `radio`      | Radio buttons (select one in a group) | `<input type="radio" name="pet" value="cat">`       |
| `checkbox`   | Checkboxes (select multiple options)  | `<input type="checkbox" value="vet">`               |
| `submit`     | Submit the form                       | `<input type="submit">` or `<button type="submit">` |

The `required` attribute ensures the field must be completed before submission.

#### 8.1.3 `<select>` and `<option>` Elements

**Purpose:** Creates a dropdown menu for selecting one option from a list.

**Syntax:**

```html
<label for="animal">Favorite animal:</label>
<select id="animal" name="animal">
  <option value="cat">Cat</option>
  <option value="dog">Dog</option>
</select>
```

#### 8.1.4 `<textarea>` Element

**Purpose:**  
Allows users to enter multi-line open-ended input, like suggestions or feedback.

**Common attributes:**
- `rows`: Number of visible text lines
- `cols`: Width of the textarea
- `placeholder`: Hint text shown when empty

**Example:**
```html
<label for="comments">Additional Comments:</label>
<textarea id="comments" name="comments" rows="4" cols="50" placeholder="Write your thoughts..."></textarea>
```

#### 8.1.5 Summary of Helpful Attributes

| Attribute     | Function                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------- |
| `required`    | Makes the field mandatory before form submission                                         |
| `placeholder` | Provides a hint about what to enter                                                      |
| `min` / `max` | Sets numeric input range                                                                 |
| `name`        | Used to group elements (e.g. radio buttons), and to identify form data during submission |

[MDN: required attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)

---

## 9. Best Practices

- Always use lowercase for tags.  
- Close all tags properly (except for void elements).  
- Use semantic HTML whenever possible.  
- Avoid incorrect nesting (no overlapping tags).
