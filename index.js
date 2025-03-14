document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);

    const response = await fetch(
      "https://brave-fantasy-horesradish.glitch.me/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      }
    );

    const result = await response.json();
    alert(result.message);
    this.reset();
  });
