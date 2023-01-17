const loginFormHandler = async (event) => {
  event.preventDefault();
  const usernameEl = document.getElementById("username-login").value.trim();
  const passwordEl = document.getElementById("password-login").value.trim();

  //check both inputs are there.
  if (!usernameEl || !passwordEl) {
    alert("You have not entered a username/password");
    return;
  }

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({ usernameEl, passwordEl }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

const loginFormEl = document.querySelector('#login-form');
loginFormEl.addEventListener('submit', loginFormHandler);