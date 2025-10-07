document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        const username = form.username.value.trim();
        if (username.length < 3) {
            alert("Username must be at least 3 characters long!");
            e.preventDefault();
        }
    });
});