document.addEventListener("DOMContentLoaded", () => {
  // Like counter toggle
  const likeBtn = document.getElementById("like-btn");
  const likeCountEl = document.getElementById("like-count");
  let count = parseInt(likeCountEl?.textContent || "0");

  likeBtn?.addEventListener("click", () => {
    count += 1;
    likeCountEl.textContent = count;
    likeBtn.disabled = true;
    likeBtn.textContent = `❤️ Liked (${count})`;
  });

  // Scroll progress bar
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
  });

  // Fancy title hover effect
  const title = document.getElementById("title-effect");
  title?.addEventListener("mouseenter", () => {
    title.style.color = "dodgerblue";
  });
  title?.addEventListener("mouseleave", () => {
    title.style.color = "";
  });
});
