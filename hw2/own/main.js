const img_source = [
                   "https://static.wikia.nocookie.net/bahapedia/images/e/ef/025c3937969d2ff9591374cb6dcd0cad.JPG/revision/latest/top-crop/width/360/height/450?cb=20180806122947&path-prefix=zh",
                   "http://i.imgur.com/3ho3jus.jpg",
                   "https://images.chinatimes.com/newsphoto/2019-01-31/656/20190131001004.jpg"
                ];
let current = 0;
const loading = "./images/loading.gif";
let display = document.getElementById("display");
let a = document.getElementsByTagName("a")
display.src = img_source[current];
a.href = img_source[current];
a.innerHTML = img_source[current];

var switch_img = function(a) {
    let tmp = current + a;
    if (tmp < img_source.length && tmp >= 0) {
        current = tmp;
        display.src = img_source[current];
        a.href = img_source[current];
        a.innerHTML = img_source[current];
    }
}

let btn = document.getElementsByClassName("image-viewer__button");
for (let i = 0 ; i < btn.length; ++i) {
    let tmp = (btn[i].firstElementChild.id === "previous")? -1:1;
    btn[i].addEventListener("click", function() {switch_img(tmp);}); 
}

