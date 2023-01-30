async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

const loginInsteadFormHandler = (event) => {
  event.preventDefault();

  document.location.replace("/login");
};

document
  .querySelector("#login")
  .addEventListener("click", loginInsteadFormHandler);
document.querySelector("#signup").addEventListener("click", signupFormHandler);
