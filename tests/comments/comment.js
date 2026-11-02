function send() {
    const nameInput = document.getElementById("comment-form-name");
    const textInput = document.getElementById("comment-form-text");

    const newComment = {name: nameInput.value, text: textInput.value};
    console.log(newComment);

    const comments = document.getElementById("comments");


    const comment = document.createElement("div");
    comment.classList.add("comment");

    const commentName = document.createElement("span");
    commentName.classList.add("comment__name");

    commentName.textContent = newComment.name;

    const commentText = document.createElement("span");
    commentText.classList.add("comment__text");

    commentText.textContent = newComment.text;


    comment.append(commentName);
    comment.append(commentText);
    comments.append(comment);

}