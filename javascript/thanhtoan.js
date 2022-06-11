function showproduct(){
    var cart = localStorage.getItem("mycart");
    var giohang = JSON.parse(cart);
    var noi = "";
    var sum =0;
    for(let i=0;i<giohang.length;i++){
        let img = giohang[i][0];
        let tensp = giohang[i][1];
        let gia = giohang[i][2];
        let soluong = giohang[i][3];
        let tongtien = gia *soluong;
        sum+=tongtien;
        noi +=`
            <tr class="table_product">
                <td style="width:20%;position: relative;">
                    <img class="img_product"
                        src="`+img+`" alt="">
                    <div class="quantily_product">
                        `+soluong+`
                    </div>
                </td>
                <td style="width:60%;padding-left: 20px;color: #737373;font-size: larger;">
                    `+tensp+`
                </td>
                <td style="width:20%;text-align: right;color: rgba(255, 0, 0, 0.801);">
                    `+tongtien+`₫
                </td>
            </tr>
        `
    }
    document.querySelector('#payment').innerHTML = noi;
    document.getElementById("tamtinh").innerHTML = sum + '₫';
    document.getElementById("tongtien").innerHTML  = sum + '₫';
}
function check()
{
    var x = document.querySelector("#tamtinh")
    var y = document.getElementById("tongtien")
    console.log(x);
}
