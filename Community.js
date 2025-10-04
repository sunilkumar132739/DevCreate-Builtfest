let posts = [];

function addPost() {
  const input = document.getElementById("postInput");
  const text = input.value.trim();
  if (text === "") return alert("Please write something before posting!");

  const newPost = {
    id: Date.now(),
    text,
    likes: 0,
    replies: []
  };

  posts.unshift(newPost);
  input.value = "";
  renderPosts();
}

function renderPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  posts.forEach(post => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
      <div class="post-header">
        <strong>User</strong>
        <small>${new Date(post.id).toLocaleString()}</small>
      </div>
      <p>${post.text}</p>
      <div class="post-actions">
        <button onclick="likePost(${post.id})"><i class="fa fa-thumbs-up"></i> Like (${post.likes})</button>
        <button onclick="replyToPost(${post.id})"><i class="fa fa-reply"></i> Reply</button>
      </div>
      <div class="replies">
        ${post.replies.map(r => `<p class="reply">↳ ${r}</p>`).join("")}
      </div>
    `;

    container.appendChild(postDiv);
  });
}

function likePost(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    post.likes++;
    renderPosts();
  }
}

function replyToPost(id) {
  const replyText = prompt("Enter your reply:");
  if (replyText && replyText.trim() !== "") {
    const post = posts.find(p => p.id === id);
    post.replies.push(replyText.trim());
    renderPosts();
  }
}
