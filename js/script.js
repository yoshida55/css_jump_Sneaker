// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburgerBtn = document.getElementById("hamburger-btn");
const mask = document.getElementById("mask");

hamburgerBtn.addEventListener("click", function () {
  // オーバーレイを表示・非表示にする(openにする・外す)
  mask.classList.toggle("open");
  // ボタン自身に .open を付けて「×」にする
  hamburgerBtn.classList.toggle("open");
});
