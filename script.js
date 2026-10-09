// Brazzom settings: use only video content you own or are authorized to share.
const MONETAG_URL = "https://uplcm.com/4/11706929";
const VIDEO_URL = "https://docs.google.com/videos/d/1MHDAVcWEVIymxgpeUAQXxSkRrbW-XZnWb0W1rbNZhhA/play?usp=sharing"; // Add a direct browser-playable MP4 URL here.

const video = document.getElementById("videoPlayer");
const source = document.getElementById("videoSource");
const overlay = document.getElementById("posterOverlay");
document.getElementById("year").textContent = new Date().getFullYear();

if (VIDEO_URL.trim()) {
  source.src = VIDEO_URL.trim();
  video.load();
  overlay.classList.add("hidden");
  video.addEventListener("error", () => overlay.classList.remove("hidden"));
}
function playVideo() {
  if (!VIDEO_URL.trim()) {
    alert("Add your authorized video MP4 URL in script.js first.");
    return;
  }
  overlay.classList.add("hidden");
  video.play().catch(() => {});
}
document.getElementById("previewPlay").addEventListener("click", playVideo);
document.getElementById("watchButton").addEventListener("click", playVideo);
document.getElementById("monetagButton").href = MONETAG_URL;
video.addEventListener("play", () => overlay.classList.add("hidden"));
