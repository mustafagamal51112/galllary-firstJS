let photoslist =[
    "assets/pexels-brett-sayles-2850290 (1).jpg",
    "assets/pexels-angela-roma-7319277.jpg",
    "assets/aussieactive-GNdp2Q4VZjw-unsplash.jpg",
    "assets/pexels-min-an-1087735.jpg",
    "assets/spencer-davis-ONVA6s03hg8-unsplash.jpg",
    "assets/uwp2042186.jpeg",
    "assets/pexels-fabiano-rodrigues-2290328.jpg",
]

let main_photo = document.createElement("img");
main_photo.src = photoslist[0];
main_photo.classList.add("main_photo")
document.body.appendChild(main_photo);

let container = document.createElement("div");
container.classList.add("container")
document.body.appendChild(container);








function createphoto(imgsrc) {
    var card = document.createElement("img");
    card.src = imgsrc
    card.classList.add("photo")
    container.appendChild(card)
    
 card.onclick = function () {
    var  x = this
     x.classList.add("animation");
     setTimeout(function () {
        main_photo.src = x.src
     },3000);
}

}
for (let i = 0; i < photoslist.length; i++) {
    createphoto(photoslist[i])
}
