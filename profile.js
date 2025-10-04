function editProfile() {
  document.getElementById("editModal").style.display = "block";
  document.getElementById("editName").value = document.getElementById("profile-name").innerText;
  document.getElementById("editEmail").value = document.getElementById("profile-email").innerText;
}

function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

function saveProfile() {
  const name = document.getElementById("editName").value;
  const email = document.getElementById("editEmail").value;
  const picInput = document.getElementById("editPic");

  document.getElementById("profile-name").innerText = name;
  document.getElementById("profile-email").innerText = email;

  if (picInput.files && picInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("profile-pic").src = e.target.result;
    };
    reader.readAsDataURL(picInput.files[0]);
  }

  closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("editModal");
  if (event.target === modal) {
    closeModal();
  }
};
