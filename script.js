'use strict';

// メイン画像に仮の初期値
const image = document.createElement("img");
image.setAttribute("src", images[0].src);
image.setAttribute("alt", images[0].description);

// 説明初期値を設定
const description = document.getElementById("description");
description.innerText = image.alt;

// 作成した要素を表示する
const mainImage = document.getElementById("main_img");
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);

// サムネの表示
const thumbnails = document.getElementById("thumbnails");

function displayThumbnails(filteredImages) {
    // 既存のサムネをクリア
    thumbnails.innerHTML = '';

    // フィルタリングされた画像のみを表示
    for (let i = 0; i < filteredImages.length; i++) {
        let thumbnailsImg = document.createElement("img");
        thumbnailsImg.setAttribute("src", filteredImages[i].src);
        thumbnailsImg.setAttribute("alt", filteredImages[i].description);
        thumbnails.insertBefore(thumbnailsImg, null);
    }
}

//　全てのサムネイル表示
displayThumbnails(images);

// クリックしたサムネをメインに
thumbnails.addEventListener("click", function(e) {
    if (e.target.src) {
        image.src = e.target.src;
        description.innerText = e.target.alt;
    }
}, false);

// 検索機能
const searchInput = document.getElementById("searchinput");
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredImages = images.filter(image => 
        image.description.toLowerCase().includes(searchTerm)
    );
    displayThumbnails(filteredImages);
}, false);
