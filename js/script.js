function toggleNav() {
    const nav = document.getElementById("navLinks");
    if (!nav) {
        return;
    }
    nav.classList.toggle("open");
}

function showTab(id, button) {
    const panels = document.querySelectorAll(".tab-panel");
    panels.forEach((panel) => panel.classList.toggle("active", panel.id === id));

    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    if (button) {
        button.classList.add("active");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const scrollTop = document.getElementById("scrollTop");
    const toggleScrollButton = () => {
        if (!scrollTop) {
            return;
        }
        scrollTop.classList.toggle("visible", window.scrollY > 320);
    };

    toggleScrollButton();
    window.addEventListener("scroll", toggleScrollButton, { passive: true });
});
