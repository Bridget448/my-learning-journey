# Personal Portfolio Webpage Project Notes

This project is part of the **Responsive Web Design** certification path on FreeCodeCamp. It focuses on the **structure** and **interactive style** of a responsive webpage.

## Project Goal

To build a **responsive personal portfolio webpage** that includes:
- A welcome section
- A project showcase section
- A contact section  
All sections should support **anchor navigation** and **basic interactive styles**.

This note serves as a **general-purpose guide** for Personal Portfolio Webpage projects.

---

## 1. Page Setup

### 1.1 Basic HTML Structure

Every HTML page must start with `<!DOCTYPE html>` and follow a standard structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Your Page Title</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to external CSS file -->
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>
```

### 1.2 Base CSS Styling

```css
/* Apply universal base styles for consistent spacing and layout */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Set global font, background, and text color */
body {
  font-family: 'Open Sans', sans-serif;
  background-color: #FDF6EC;
  color: #FDF6EC;
  line-height: 1.6;
}
```

Tips:
- Each section can use `min-height: 100vh` to ensure full-screen layout consistency.
- Use `text-align: center`, `margin`, and `padding` to manage spacing and alignment.

---

## 2. Page Layout & Navigation Bar

### 2.1 Basic HTML Structure

Create a navigation bar using `<nav id="navbar">`, and use `<a href="#section-id">` to enable internal anchor navigation.

Place the `<nav>` near the top of the `<body>`, and use CSS to fix it to the top of the page.  
Each navigation link points to a different `<section>` within the same page.

```html
<nav id="navbar">
  <a href="#welcome-section">About</a>
  <a href="#projects">Work</a>
  <a href="#contact">Contact</a>
</nav>
```

### 2.2 Base CSS Styling

- Fix the navbar to the top of the page using `position: fixed`.
- Arrange navigation items horizontally using `display: flex` and `justify-content: flex-end`.
- Set background and font colors.
- Apply hover effect to change link color.
- Control the height and font size of the navbar items.

```css
#navbar {
  position: fixed;              /* Fixes the navbar to the top */
  top: 0;                       
  width: 100%;                  /* Full width */
  z-index: 1000;                /* Makes sure navbar stays on top */
  background-color: #8B0000;    /* Deep red background */
  color: #FDF6EC;               /* Cream text color */
  display: flex;                /* Enables horizontal layout */
  justify-content: flex-end;    /* Align items to the right */
  padding: 1rem 2rem;
  height: 3em;                  /* Total navbar height */
}

#navbar a {
  margin-left: 2rem;            /* Spacing between links */
  text-decoration: none;        /* Removes underline */
  color: #FDF6EC;
  font-size: 1.25rem;
  transition: color 0.3s ease;  /* Smooth color change on hover */
}

#navbar a:hover {
  color: #FFC0CB;               /* Light pink on hover */
}
```

---

## 3. Welcome Section

### 3.1 Basic HTML Structure

- Use a `<section>` element with the ID `welcome-section`.
- Must include an `<h1>` element for the welcome message.
- Set the section height to 100vh (full viewport height).
- Usually centered both vertically and horizontally.
- You may use a background image or a solid color.

```html
<section id="welcome-section">
  <h1 id="title">Hey I am Bridget</h1>
  <p id="description">a web developer</p>
</section>
```

### 3.2 Base CSS Styling

- Set a background image or solid background color.
- Center the content using Flexbox (`display: flex`, `justify-content: center`, `align-items: center`).
- Apply different font sizes and colors for the heading and description to create visual hierarchy.

```css
#welcome-section {
  background-image: url('your-background-image.jpg'); /* Optional background image */
  background-size: cover;
  background-position: center;
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical center */
  align-items: center;     /* Horizontal center */
  color: #FDF6EC;
  text-align: center;
  padding: 0 2rem;
}

#welcome-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

#welcome-section p {
  font-size: 1.25rem;
  color: #8B0000;
}
```

---

## 4. Project Showcase Section

### 4.1 Basic HTML Structure

- Use a `<section id="projects">` container.
- Inside it, create multiple `.project-tile` blocks — one for each project.
- Each `.project-tile` typically contains:
  - An `<img>` element for project preview.
  - A `<p>` element for the project title.
  - All wrapped inside an `<a>` tag to make the whole tile clickable.
- Layout can be handled using Grid or Flexbox.
- Live preview links usually point to deployed GitHub Pages URLs.

```html
<section id="projects">
  <h2>These are some of my projects</h2>

  <div class="project-tile">
    <a href="https://your-project-link-1" target="_blank">
      <img class="project-image" src="https://your-image-url-1.jpg" alt="Project 1 Preview" />
      <p>Project Name</p>
    </a>
  </div>

  <!-- More .project-tile blocks as needed -->
</section>
```

### 4.2 Base CSS Styling

- Use CSS Grid or Flexbox to arrange project tiles horizontally.
- Keep image dimensions consistent using `object-fit: cover` to ensure proper cropping.
- Style each tile with background color and hover decoration (e.g., `<Survey Form/>`).
- Remove text underlines using `text-decoration: none`.

```css
#projects {
  background-color: #D2691E; /* Caramel background */
  min-height: 100vh;
  text-align: center;
  padding: 4rem 2rem;
}

.project-tile {
  background-color: #FFF5E1; /* Light beige background for tiles */
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  width: 300px;
  display: inline-block; /* Horizontally aligned */
  transition: transform 0.3s ease;
}

.project-tile:hover {
  transform: translateY(-5px); /* Lift on hover */
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Ensures image fills area without distortion */
  border-radius: 6px;
}

.project-tile a {
  text-decoration: none; /* Removes underline from link */
}

.project-tile a p {
  font-size: 1.25rem;
  color: #FDF6EC;
  margin-top: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.project-tile:hover p::before {
  content: "<"; /* Adds < before project name on hover */
  color: #E30B5C; /* Raspberry pink */
}

.project-tile:hover p::after {
  content: "/>"; /* Adds /> after project name on hover */
  color: #E30B5C;
}
```

---

## 5. Contact Section

### 5.1 Basic HTML Structure

- Use `<section id="contact">` to define the contact section.
- Typically includes:
  - One short introductory sentence.
  - Two external links:
    - A GitHub link (must include `id="profile-link"` and `target="_blank"`).
    - An email link using `mailto:`.

```html
<section id="contact">
  <h3>Let's work together...</h3>
  <p class="contact-intro">Let's grab a coffee and chat.</p>
  <div class="contact-icons">
    <a class="icon-link" id="profile-link" href="https://github.com/bridget448" target="_blank">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a class="icon-link" href="mailto:Xzhangsan@proton.me" target="_blank">
      <i class="fas fa-envelope"></i> Send a mail
    </a>
  </div>
</section>
```

### 5.2 Base CSS Styling

- Vertically center the entire section content using Flexbox.
- Display the icon and the text in a horizontal row using `display: flex` with spacing (`gap`) between them.

```css
#contact {
  background-color: #4B3621;       /* Dark brown background */
  color: #FDF6EC;                  /* Light cream text color */
  min-height: 100vh;               /* Full viewport height */
  display: flex;                   /* Enable flex layout */
  flex-direction: column;          /* Stack elements vertically */
  justify-content: center;         /* Vertically center the content */
  align-items: center;             /* Horizontally center the content */
  padding: 4rem;                   /* Inner spacing */
  text-align: center;              /* Center text horizontally */
}
```

---

## 6. Responsive Design (Media Queries)

Use media queries to adapt layout and styling based on different screen widths.

```css
@media (max-width: 768px) {
  nav {
    flex-direction: column;     /* Stack nav links vertically */
    align-items: center;        /* Center-align nav links */
  }

  .project-tile {
    width: 90%;                 /* Make project tiles fill more horizontal space */
  }

  .contact-icons {
    flex-direction: column;     /* Stack contact icons vertically */
    gap: 1.5rem;                /* Add spacing between stacked icons */
  }
}
