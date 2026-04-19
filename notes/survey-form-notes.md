# Survey Form Project Notes

## 1. Project Overview

This survey form was created as part of freeCodeCamp's Responsive Web Design certification project.  
**Title**: Neighborhood Stray Animal Survey  
**Purpose**: To raise awareness and improve the quality of life for stray animals in the community.

---

## 2. What happened

### 2.1 Confused about block vs inline elements in HTML

I incorrectly placed several block-level elements (`<p>`, `<form>`) inside an `<h1>` element. After reviewing the rules, I learned that:

- `<h1>`, `<p>`, and `<form>` are **block-level elements**, and should not be nested inside one another unless it’s semantically appropriate.
- Inline elements (like `<span>`, `<a>`, `<strong>`) are designed to exist within block-level elements to style inline content.

[Block-level elements on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

**Corrected structure**:
```html
<h1 id="title">Neighborhood Stray Animal Survey</h1>
<p id="description">To raise awareness and improve the quality of life for stray animals in the community.</p>
<form id="survey-form">
  <!-- form inputs go here -->
</form>
```

### 2.2 Didn't know how to use the `required` attribute

When I first saw the instruction:

> *Inside the form element, you are required to enter your name in an input field that has an id of name and a type of text*,

I knew it meant the field should be required, but I didn’t know **how** to implement that in code. I didn't realize that the solution was to add the `required` attribute directly inside the `<input>` tag.

After asking for help, I learned that HTML5 provides built-in validation. If an input is marked with `required`, the browser will prevent form submission until it is filled.

Correct usage:
```html
<input id="name" type="text" required>
```

This means the field must be filled in before the form can be submitted.

[required attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required)

---

## 3. What I Learned

- **Block vs Inline**: It's important to understand how HTML elements are categorized and used properly.
- **Form validation attributes**:
  - `required` – ensures the field must be filled before submitting.
  - `type="email"` – triggers built-in validation for email format.
  - `min` / `max` – defines the range of valid numbers.
- **Grouping radio buttons**: Using the same `name` attribute for related options ensures only one can be selected.
- **Checkboxes**: Can be used for multiple selections; not always required unless explicitly needed.
- **Placeholder text**: Helps guide users on how to fill inputs.
- **Textarea**: Useful for open-ended feedback.
- **Dropdowns (`select` & `option`)**: Allow users to choose from a list of predefined options.

---

## 4. Next Steps

- Extract generalized notes into [html-notes.md](https://github.com/Bridget448/my-learning-journey/blob/main/html-notes.md)
