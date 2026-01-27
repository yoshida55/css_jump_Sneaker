// ハンバーガーメニュークリック時にクラス（open）を付け外しする
const hamburgerBtn = document.getElementById("hamburger_btn");
const mask = document.getElementById("mask");
const gNav = document.getElementById("g_nav");

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

/*=================================================
画像のフェードイン
===================================================*/
$(window).scroll(function () {
  // feature_item の画像すべてに対して処理
  $(".feature_item img").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // この画像までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();

    // 画像が画面下から200px入ったら表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});
