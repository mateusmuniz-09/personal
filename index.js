document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);

    const response = await fetch("https://personal-zi4o.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    });

    const result = await response.json();
    alert(result.message);
  });
