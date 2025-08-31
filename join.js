const form = document.getElementById("joinForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    console.log(data);
    alert(data.success ? "User created! ID: " + data.userId : data.message);
  } catch (err) {
    console.error(err);
    alert("Error sending request");
  }
});
