// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburgerBtn = document.getElementById("hamburger-btn");
const mask = document.getElementById("mask");
const gNav = document.getElementById("g-nav");

hamburgerBtn.addEventListener("click", function () {
  // オーバーレイを表示・非表示にする(openにする・外す)
  mask.classList.toggle("open");
  // ボタン自身に .open を付けて「×」にする
  hamburgerBtn.classList.toggle("open");
  // ナビゲーションメニューを表示・非表示にする
  gNav.classList.toggle("open");
});

/*=================================================
PICK UP スライダー (Slick)
===================================================*/
$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
