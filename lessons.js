function startLesson(lessonId) {
  alert("Starting lesson: " + lessonId);

  // Example: redirect to another page
  if (lessonId === "intro") {
    window.location.href = "/Hackathon/HTML/Lesson-Intro.html";
  } else if (lessonId === "recycling") {
    window.location.href = "/Hackathon/HTML/Lesson-Recycling.html";
  } else if (lessonId === "energy") {
    window.location.href = "/Hackathon/HTML/Lesson-Energy.html";
  }
}
