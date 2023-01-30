// after button is clicked, will update comments table
// also id of the blog in which the comment happened

async function commentFormHandler (event) {
    event.preventDefault();

    const blogId = event.target.dataSet.blogId
    let commentText = document.querySelector('#comment').value
    fetch('http://localhost:3000',{
        type: "application/json",
        method: 'POST',
        body: JSON.stringify({commentText: commentText, blogId:blogId})
    })
    .then
    // a promise after updating the database what should be done
    // user ID  - from the backend with req.sesion.user_id


}

document.querySelector('#comment_save').addEventListener('click', commentFormHandler)