const addPostFormHandler = (event) => {
  event.preventDefault();

  document.location.replace("/dashboard/newblog");
};

document
  .querySelector("#dashboard-add-post-btn")
  .addEventListener("click", addPostFormHandler);

async function submitPostHandler(event) {
  event.preventDefault();

  const blog_name = document.querySelector('#blog-name').value.trim();
  const blog_content = document
    .querySelector('#blog-content')
    .value.trim();

  const response = await fetch(`/api/blogs`, {
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
