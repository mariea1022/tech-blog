const addPostFormHandler = (event) => {
    event.preventDefault();
  
    document.location.replace("/dashboard/newblog");
  };
  
  document
    .querySelector("#dashboard-add-post-btn")
    .addEventListener("click", addPostFormHandler);