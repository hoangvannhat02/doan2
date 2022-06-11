const list = ["img/anhquangcao/anh1.webp",
    "img/anhquangcao/anh2.webp",
    "img/anhquangcao/anh3.webp",
]
let dem = 0;
function transferR(){
    dem++;
    if(dem >= list.length){
        dem = 0;
    }
    let img = document.getElementById("img");
    img.src = list[dem];
}
setInterval("transferR()",3000)
function transferL(){
    dem--;
    if(dem < 0){
        dem = list.length -1;
    }
    let img = document.getElementById("img");
    img.src = list[dem];
}
//Phần hiển thị sản phẩm 
function showproduct(i) {
    let x = document.getElementsByClassName("item-check-product")[i]
    x.style.display = 'block'
}
function hidden_product(i) {
    let x = document.getElementsByClassName("item-check-product")[i]
    x.style.display = 'none'
}
function chuyenanh(e) {
    let list = document.getElementsByClassName('img_item');
    let parent = e.parentElement.parentElement;
    let child = parent.children[0];
    for (let x of list) {
        x.style.opacity = 0.5;
    }
    child.src = e.src;
    e.style.opacity = 1;
}
// function hiddenproduct(){
//     document.getElementById('item-check-product').style.display = 'none';
// }

// Phần chuyển ảnh chi tiết sản phẩm
let scroll = 0;
var arrscrol = document.querySelector('.picture-nd'); 
let listscroll = document.querySelector('.noidung-mid');
function chuyenphai(i){
    console.log(arrscrol);
    for(let i=0;i<arr.length;i++){
        document.querySelectorAll('.picture-nd')[i].style.transform = 'translateX(-100%)'
    }
}
let i=0;
function chuyentrai(){
    let arr = document.querySelectorAll('.picture-nd');
    document.querySelectorAll('.picture-nd')[i].style.transform = 'translateX(0%)'
    i++;
}

function showdvn(){
    if(document.getElementById('hover-product').style.display === 'none')
        document.getElementById('hover-product').style.display = 'block'
    else
    document.getElementById('hover-product').style.display = 'none'
}
function showtu(i){
    if(document.getElementsByClassName('product-donhap')[i].style.display === 'none')
        document.getElementsByClassName('product-donhap')[i].style.display = 'block'
    else
        document.getElementsByClassName('product-donhap')[i].style.display = 'none'
}
function menuopen(){
    document.querySelector('.content_detail_product_right').style.transform = 'translateX(0%)'
    document.getElementById('icon_menu_open').style.display = 'none'
    document.getElementById('item_exit').style.opacity = '1'
}
function iconexit(){
    document.querySelector('.content_detail_product_right').style.transform = 'translateX(100%)'
    document.getElementById('icon_menu_open').style.display = 'block'
    document.getElementById('item_exit').style.opacity = '0'
    location.reload()
}