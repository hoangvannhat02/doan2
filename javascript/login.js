function checktk(){
    var fom = document.querySelector(".left_login");
    var arrtt = fom.querySelectorAll(".form_input");
    for(let i=0;i<arrtt.length;i++){
        if(arrtt[i].value ===""){
            arrtt[i].parentElement.querySelector(".error_messeger").innerHTML = `Vui lòng nhập ${arrtt[i].id}`
        }
        else{
            arrtt[i].parentElement.querySelector(".error_messeger").innerHTML = ""
        }
    }
}
var lish = JSON.parse(localStorage.getItem('account')) || []
function checklogin(){
    //gọi hàm chạy thông báo lỗi
    checktk();
    var fom = document.querySelector(".left_login");
    var error = fom.querySelectorAll(".error_messeger");
    const arrError = [];
    for(let i=0;i<error.length;i++){
        arrError.push(error[i].innerText); //lưu các thông báo lỗi vào mảng arrError
    } 
    var checkErorr = arrError.every(value => value==="") //kiểm tra trong mảng lỗi nếu có dữ liệu = rỗng trả về fall và ngược lại
    // if(checkErorr){
    //     var valuetk = document.getElementById("email").value;
    //     var valuepassword = document.getElementById("password").value;
    //     let listaccount = localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : [];
    //     listaccount.push({
    //         tk: valuetk,
    //         mk: valuepassword
    //     })
    //     localStorage.setItem("account",JSON.stringify(listaccount));
    // }
    var valuetk = document.getElementById("email").value;
    var valuepassword = document.getElementById("password").value;
    if(checkErorr){
        for(x of lish)
        {
            if(x.tk=== valuetk && x.mk === valuepassword){
                alert("Chào mừng "+x.ho +x.ten +" đã đăng nhập trang web thành công")
                window.location.href = "trangchu.html";
                break;
            }
            else if(valuetk=== "admin" && valuepassword === "123"){
                window.location.href = "/admin/trangquantri.html";
                break;
            }
            else{
                alert("Thông tin tài khoản hoặc mật khẩu không chính xác!")
                return false;
            }
        }
    }
}

function checkformdky(){
    var form = document.querySelector(".title_register");
    var checkdky = form.querySelectorAll(".form_input");
    for(let i=0;i<checkdky.length;i++){
        if(checkdky[i].value===""){
            checkdky[i].parentElement.querySelector(".error_messeger").innerHTML = "không thể bỏ trống phần này"
        }
        else{
            checkdky[i].parentElement.querySelector(".error_messeger").innerHTML = ""
        }
    }
}
function dangky(){
    checkformdky()
    var err = document.querySelectorAll(".error_messeger");
    const arrerror = [];
    for(x of err){
        arrerror.push(x.innerText);
    }
    var checkerr = arrerror.every(x => x==="")
    if(checkerr){
        var valueho = document.getElementById("ho").value;
        var valuename = document.getElementById("name").value;
        var valuetk = document.getElementById("email").value;
        var valuepassword = document.getElementById("password").value;
        let listaccount = localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : [];
        listaccount.push({
            tk: valuetk,
            mk: valuepassword,
            ho:valueho,
            ten: valuename
        })
        localStorage.setItem("account",JSON.stringify(listaccount));
        alert("Đăng ký tài khoản thành công")
        location.reload();
    }
}

function timlaimk(){
    var x = document.getElementById("account").value;
    for(r of lish){
        if(r.tk === x){
            alert("Thông tin tài khoản của bạn: "+"Tài khoản: "+r.tk+" , Mật khẩu: "+r.mk)
        }
        else{
            alert("tài khoản bạn nhập không tồn tại")
        }
    }
}

function showpass(){
    var pass = document.getElementById("password");
    pass.type =  (pass.type === 'password') ? 'text' : 'password';
}