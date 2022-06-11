//khởi tạo mảng để lưu thông tin sản phẩm
var giohang = JSON.parse(localStorage.getItem("mycart")) ? JSON.parse(localStorage.getItem("mycart")) : [];
//tạo hàm để lưu thông tin giỏ hàng vào mảng
function themvaogiohang(x){
    //Gọi đến thẻ cha của hàm themvaogiohang() để lấy dữ liệu từ các phần tử con của nó 
    var boxsp = x.parentElement.children;
    var src_img = boxsp[0].src;
    var tensp = boxsp[1].innerText;
    var giasp = boxsp[3].children[0].innerText;
    var soluong = parseInt(boxsp[5].children[0].value);
    //Tạo một đối tượng lưu thông tin sản phẩm
    var item = [src_img,tensp,giasp,soluong];
    //Kiểm tra hàng hóa tăng số lượng nếu trùng
    var check = false;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1]===tensp){
            check=true;
            soluong += parseInt(giohang[i][3]);
            giohang[i][3]=soluong;
            break;
        }
    }
    //kiểm tra nếu hàng hóa không bị trùng thì thêm mới
    if(check==false){
        giohang.push(item);
    }
    //lưu giỏ hàng lên localstorage
    localStorage.setItem("mycart",JSON.stringify(giohang));
    //gọi hàm trả về số lượng của giỏ hàng
    showquantilycart();
    // //gọi đến hàm đưa thông tin vào giỏ hàng
    showgiohang();
    alert("Thêm vào giỏ hàng thành công")
}

//Hàm trả về số lượng sản phẩm đã đặt 
function showquantilycart(){
    var getdata = localStorage.getItem("mycart");
    var mycart = JSON.parse(getdata);
    let sum=0;
    for(let i=0; i<mycart.length;i++){
        sum += mycart[i][3]; 
    }
    document.getElementById('quantity_product').innerText = sum;
}

//gọi đến hàm đưa thông tin vào giỏ hàng
function showgiohang(){
    var cart = "";
    var tong = 0;
    var getdata = localStorage.getItem("mycart");
    var mycart = JSON.parse(getdata);
    for(var i=0;i<mycart.length;i++){
        let img = mycart[i][0];
        let gia = mycart[i][2];
        let soluong = mycart[i][3];
        let tensp = mycart[i][1];
        let tongtien = gia * soluong;
        cart += `<table>
                    <tr>
                        <td>
                            <img src="`+img+`" alt="abc">
                        </td>   
                        <td>
                            <p>Tên sản  phẩm: <span>`+tensp+`</span></p>
                            <span>
                                giá: `+gia+` <span>đ</span>
                            </span>
                            <div>
                                <button onclick="down(this)">-</button> <input type="text" onchange="updatesl(this)" value="`+soluong+`" size="3"> <button onclick="up(this)">+</button>   
                                <i onclick="removecart(this)" class="fa-solid fa-xmark"></i>    
                            </div>                                       
                        </td>                  
                    </tr>
                    <tr>
                    </tr>
                </table>`
        tong += tongtien;
    }
    cart += `
                <div>
                    Tổng cộng <span>`+tong+`đ</span>
                </div>
                <button>
                    <a href="cart.html">giỏ hàng</a>
                </button>
                <button>
                    <a href="thanhtoan.html">thanh toán</a>
                </button>` 
    document.querySelector(".item_cart").innerHTML = cart;
    showquantilycart()
}

function showcart(){
    var cart = localStorage.getItem("mycart");
    var arrcart = JSON.parse(cart); 
    var  itemcart = "";
    var tongtienthanhtoan = "";
    var sum = 0;
    for(var i=0; i < arrcart.length; i++){
        var tongtien = arrcart[i][3]*arrcart[i][2];
        sum += tongtien;
        itemcart += `
                <div class="item_cart_product">
                    <div style="width:18%;">
                        <a href="">
                            <img src="`+arrcart[i][0]+`" alt="">
                        </a>
                    </div>
                    <div style="width:25%;">
                        <a href="">
                        `+arrcart[i][1]+`
                        </a>
                    </div>
                    <div style="width:17%;font-weight: bolder;">
                    `+arrcart[i][2]+`₫
                    </div>
                    <div style="width:17%;">
                        <div class="txt_content">
                            <button onclick="downcart(this)" class="down_sl">
                                -
                            </button>
                            <input type="text" onchange="updatequantily(this)" name="" id="" value="`+arrcart[i][3]+`" min="1" maxlength="12" size="4">
                            <button onclick="upcart(this)" class="up_sl">
                                +
                            </button>
                        </div>
                    </div>
                    <div style="width:12%;font-weight: bolder;">
                    `+tongtien+`₫
                    </div>
                    <div style="width:11%;">
                        <i onclick="deletecart(this)" class="fa-solid fa-trash-can"></i>
                    </div>
                </div>
                 `
    }
    itemcart += `
                <div id="buy_product">
                    <div class="sum_price">
                        Tổng tiền: <span style="color:black;font-weight: bold;">`+sum+`₫</span>
                    </div>
                    <div class="click_buy">
                        <button onclick="return_product()" class="back_product">
                            Tiếp tục mua hàng
                        </button>
                        <button class="order_product" onclick="nexttorder()">
                            Tiến hành đặt hàng
                        </button>
                    </div>
                </div>
    `
    document.getElementById("cart_body").innerHTML = itemcart ;
    showquantilycart()
}
//quay lại trang chủ
function return_product(){
        window.location.href = "trangchu.html";
}
//chuyển đến trang thanh toán
function nexttorder(){
    window.location.href = "thanhtoan.html";
}
//Cập nhập lại vào local
function update(){
    localStorage.setItem("mycart",JSON.stringify(giohang));
}
//Xóa từng sản phẩm trong giỏ hàng
function removecart(x){
    var dele = x.parentElement.parentElement.parentElement;
    var tensp = dele.children[1].children[0].children[0].innerText;
    dele.remove();
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1]==tensp){
            giohang.splice(i,1);
        }
    }
    update();
    showquantilycart();
}
//Xóa từng sản phẩm trong giỏ hàng phần trang chủ
function deletecart(x){
    var cha = x.parentElement.parentElement;
    var tensp = cha.children[1].children[0].innerText;
    cha.remove();
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1]==tensp){
            giohang.splice(i,1);
        }
    }
    update();
    showcart();
    showquantilycart();
}
//click tăng số lượng sản phẩm trong giỏ hàng trang chủ
function down(x){
    var namesp = x.parentElement.parentElement;
    var getname = namesp.children[0].children[0].innerText;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1] == getname){
            giohang[i][3] = Number(giohang[i][3]) - 1;
        }
    }
    update();
    showgiohang();
}
//click giảm số lượng sản phẩm trong giỏ hàng 
function downcart(x){
    var namesp = x.parentElement.parentElement.parentElement;
    var getname = namesp.children[1].innerText;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1] == getname){
            giohang[i][3] = Number(giohang[i][3]) - 1;
        }
    }
    update();
    showcart();
}
//click tăng số lượng sản phẩm trong giỏ hàng trang chủ
function up(x){
    var namesp = x.parentElement.parentElement;
    var getname = namesp.children[0].children[0].innerText;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1] == getname){
            giohang[i][3] = Number(giohang[i][3]) + 1;
        }
    }
    update();
    showgiohang();
}
//click tăng số lượng sản phẩm trong giỏ hàng 
function upcart(x){
    var namesp = x.parentElement.parentElement.parentElement;
    var getname = namesp.children[1].innerText;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1] == getname){
            giohang[i][3] = Number(giohang[i][3]) + 1;
        }
    }
    update();
    showcart();
}
//Cập nhập lại số lượng sản phẩm trong giỏ
function updatequantily(x){
    var quantily = x.parentElement.parentElement.parentElement;
    var getname = quantily.children[1].innerText;
    var getquantily = quantily.children[3].children[0].children[1].value;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1] == getname){
            giohang[i][3] = getquantily;
        }
    }
    update();
    showcart();
}
//Cập nhập lại số lượng sản phẩm trong giỏ phần trang chủ
function updatesl(x){
    var quantily = x.parentElement.parentElement;
    var getname = quantily.children[0].children[0].innerText;
    var getquantily = quantily.children[2].children[1].value;
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1] == getname){
            giohang[i][3] = getquantily;
        }
    }
    update();
    showgiohang();
}
//Thêm sản phẩm vào giỏ hàng 
function addtocart(x){
    var parentimg =  x.parentElement.parentElement;
    var getsrcimg = parentimg.children[0].src;
    var name ="";
    var price = "";
    var quantily = 0;
    var index = 0;
    for(var i=0;i<giohang.length;i++){
        if(giohang[i][0] == getsrcimg && giohang[i][3] > 0){
            giohang[i][3] += 1;
            name = giohang[i][1];
            price = giohang[i][2];
            quantily += giohang[i][3];
            index += i;   
        }
    }
    var hien = document.querySelectorAll(".bgr_addtocart")[index];
    hien.style.display = 'block';
    update();
    showcartproduct(getsrcimg,name,price,quantily,index);
    showgiohang();
    alert("thêm vào giỏ hàng thành công");
}

function showcartproduct(img,name,price,quantily,index){
    var tatolprice = 0;
    for(var i=0;i<giohang.length;i++){
        tatolprice += giohang[i][3];
    }
    var parentclass = document.querySelectorAll(".mes_addtocart") [index];
    var childsrcclass = parentclass.children[0].children[0];
    var childname = parentclass.children[1].children[0].children[0];
    var childquantily = parentclass.children[1].children[1].children[0];
    var childprice = parentclass.children[1].children[2].children[0];
    childsrcclass.src = img; 
    childname.innerHTML = name;
    childquantily.innerHTML = quantily;
    childprice.innerHTML = price; 
    document.querySelectorAll(".tatolprice")[index].innerHTML  = tatolprice ;
}

// Ẩn phần thêm giỏ hàng
function hidcart(i){
    document.getElementsByClassName("bgr_addtocart")[i].style.display = 'none'
}
//Thêm vào giỏ hàng
showgiohang();
showquantilycart();
