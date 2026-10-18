# Shelter 🐾

A multi-page responsive and interactive website for a pet shelter. Built from scratch with a strong focus on semantic layout, pixel-perfect UI rendering, and clean DOM manipulation.

🔗 **[Live Demo](https://morevna.github.io/shelter/)**

---

## 🛠️ Tech Stack & Architecture

- **Markup & Styling:** Semantic HTML5, CSS3 (Flexbox, Grid), Validated W3C layout.
- **Methodology:** Component-based approach, responsive layout down to 320px screen width.
- **Interactivity:** Native JavaScript (ES6+), advanced DOM Event Listeners.

---

## 🚀 Key Technical Features

- **Dynamic Modal Engine:** Implemented a custom modal rendering pipeline. Card elements dynamically toggle modal visibility and map custom `data-path` attributes to view overlays without duplicating boilerplate elements.
- **Stateful Navigation UI:** Engineered an adaptive burger menu that prevents document background scrolling (`body _lock`) and manages interactive states fluidly through isolated utility classes.
- **Pixel-Perfect & Adaptive CSS:** Designed centered container bounds (>1280px scales) paired with multi-row CSS Grid alignments for catalog items and full-bleed colored background sections.
- **Interactive Micro-animations:** Configured comprehensive UI feedback (hover and active click states) across pet profile cards and navigation hooks without shifting adjacent sibling layouts.

---

## 📂 Code Workflow Sample

The core logic handles modal overlays seamlessly by listening to data-attribute shifts on pet cards:

```javascript
btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((modal) => modal.classList.remove('modal--visible'));

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});
```
