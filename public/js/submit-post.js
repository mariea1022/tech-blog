const submitPostHandler = async (event) => {
  event.preventDefault();

  const blog_name = document.querySelector('#blog-name').value.trim();
  const blog_content = document
    .querySelector('#blog-content')
    .value.trim();

  let response = await fetch(`/api/blogs`, {
    method: "POST",
    body: JSON.stringify({
      blog_name,
      blog_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#submit-new-post-btn")
  .addEventListener("submit", submitPostHandler);
