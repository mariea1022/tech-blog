const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  // validate that both username and password were entered
  if (username && password) {
    const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

//   if (!username || !password) {
//     alert("Please enter both a username or password");
//     return;
//   }

//   const response = await fetch("/api/users/login", {
//     method: "POST",
//     body: JSON.stringify({ username, password }),
//     headers: { "Content-Type": "application/json" },
//   });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    console.log("err: ", response);
    //alert(response.statusText);
  }
}
}

const loginFormEl = document.querySelector('.login-form').addEventListener('submit', loginFormHandler);