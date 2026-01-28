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
オーバーレイ（黒い背景）をクリックした際にメニューを閉じる
===================================================*/

mask.addEventListener("click", function () {
  // オーバーレイを非表示にする
  mask.classList.remove("open");
  // ボタン自身の「×」を元に戻す
  hamburgerBtn.classList.remove("open");
  // ナビゲーションメニューを非表示にする
  gNav.classList.remove("open");
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
    centerPadding: "0.6rem",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0.6rem",
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

    // 画像が画面下から20rem入ったら表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});
