import { ListPerson } from "../models/ListPerson.js";
import { Stundent, Employee, Customer } from "../models/model.js";

let listNguoiDung = new ListPerson();
document.querySelector(".modal-body #form").onchange = () => {
    let e = document.querySelector('#chonNguoiDung').value;

    if (e == 0) {
        document.getElementById('sinhVienInput').style.display = 'none';
        document.getElementById('nhanVienInput').style.display = 'none';
        document.getElementById('khachHangInput').style.display = 'none';
    } else if (e == 1) {
        document.getElementById('sinhVienInput').style.display = 'block';
        document.getElementById('nhanVienInput').style.display = 'none';
        document.getElementById('khachHangInput').style.display = 'none';
    } else if (e == 2) {
        document.getElementById('sinhVienInput').style.display = 'none';
        document.getElementById('nhanVienInput').style.display = 'block';
        document.getElementById('khachHangInput').style.display = 'none';

    } else if (e == 3) {
        document.getElementById('sinhVienInput').style.display = 'none';
        document.getElementById('nhanVienInput').style.display = 'none';
        document.getElementById('khachHangInput').style.display = 'block';

    }
}
//Thêm
document.querySelector('#btnThemNguoiDung').onclick = () => {
    let chonND = document.querySelector('#chonNguoiDung').value;
    let themND = document.querySelectorAll('.person input , .person select');
    let themSV = document.querySelectorAll('#sinhVienInput input');
    let themNV = document.querySelectorAll('#nhanVienInput input');
    let themKH = document.querySelectorAll('#khachHangInput input');

    if (chonND == 0) {
        window.alert("Vui lòng chọn loại người dùng !");
    } else if (chonND == 1) {
        let user = new Stundent();
        for (let input of themND) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of themSV) {
            let { id, value } = input;
            user[id] = +value;

        }
        user.userChoose = "Sinh Viên";

        listNguoiDung.themNguoiDung(user, chonND)

    } else if (chonND == 2) {
        let user = new Employee();
        for (let input of themND) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of themNV) {
            let { id, value } = input;
            user[id] = +value;
        }
        user.userChoose = "Nhân Viên";
        listNguoiDung.themNguoiDung(user, chonND);

    } else if (chonND == 3) {
        let user = new Customer();
        for (let input of themND) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of themKH) {
            let { id, value } = input;
            user[id] = +value;
        }
        user.userChoose = "khách Hàng";
        listNguoiDung.themNguoiDung(user, chonND);
    }
    document.querySelector('#tbodyNguoiDung').innerHTML = listNguoiDung.renderNguoiDung();
    listNguoiDung.savelocalStorage();
}
//Xóa
window.deleteUser = (id) => {
    if (listNguoiDung.xoaNguoiDung(id)) {
        listNguoiDung.savelocalStorage();
        document.querySelector("#tbodyNguoiDung").innerHTML = listNguoiDung.renderNguoiDung();
    }
}
window.updateUser = (id) => {
    document.querySelector('#chonNguoiDung').disabled = true;
    document.querySelector('#id').disabled = true;
    document.querySelector('#btnThemNguoiDung').disabled = true;
    let updateUser = listNguoiDung.layNguoiDung(id);
    let arrayInput = document.querySelectorAll(".person input, .person  select, #sinhVienInput input,#nhanVienInput input,#khachHangInput input");
    arrayInput.forEach(input => console.log(input))
    if (updateUser == 1) {
        document.getElementById('sinhVienInput').style.display = 'block';

    } else if (updateUser == 2) {
        document.getElementById('nhanVienInput').style.display = 'block';

    } else if (updateUser == 3) {
        document.getElementById('khachHangInput').style.display = 'block';

    }
    for (let input of arrayInput) {
        let { id } = input;
        input.value = updateUser[id];
    }
}
document.querySelector('#btnCapNhat').onclick = () => {
    let chonND = document.querySelector('#chonNguoiDung').value;
    let themND = document.querySelectorAll('.person input , .person select');
    let themSV = document.querySelectorAll('#sinhVienInput input');
    let themNV = document.querySelectorAll('#nhanVienInput input');
    let themKH = document.querySelectorAll('#khachHangInput input');

    if (chonND == 0) {
        window.alert("Vui lòng chọn loại người dùng !");
    } else if (chonND == 1) {
        let user = new Stundent();
        for (let input of themND) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of themSV) {
            let { id, value } = input;
            user[id] = +value;

        }
        user.userChoose = "Sinh Viên";
        document.querySelector("#tbUser").innerHTML = "";
        listNguoiDung.capNhatNguoiDung(user.id, chonND);
        listNguoiDung.savelocalStorage();

    } else if (chonND == 2) {
        let user = new Employee();
        for (let input of themND) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of themNV) {
            let { id, value } = input;
            user[id] = +value;
        }
        user.userChoose = "Nhân Viên";
        document.querySelector("#tbUser").innerHTML = "";
        listNguoiDung.capNhatNguoiDung(user.id, chonND);
        listNguoiDung.savelocalStorage();

    } else if (chonND == 3) {
        let user = new Customer();
        for (let input of themND) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of themKH) {
            let { id, value } = input;
            user[id] = +value;
        }
        user.userChoose = "khách Hàng";
        document.querySelector("#tbUser").innerHTML = "";
        listNguoiDung.capNhatNguoiDung(user.id, chonND);
        listNguoiDung.savelocalStorage();
    }
    document.querySelector('[data-bs-dismiss="modal"]').click();
    document.querySelector('#tbodyNguoiDung').innerHTML = listNguoiDung.renderNguoiDung();

}

window.renderModal = id => {
    let userInfo = listNguoiDung.layNguoiDung(id);
    console.log(userInfo.chonNguoiDung);
    document.querySelector("#chiTiet").innerHTML = listNguoiDung.renderChiTiet(userInfo.chonNguoiDung, userInfo.id);

}

document.querySelector("#selLoai").oninput = (e) => {
    console.log(listNguoiDung);
    let loai = e.target.value;
    let cloneUserList = [...listNguoiDung.ArrnguoiDung];
    listNguoiDung.filter(loai);
    document.querySelector('#tbodyNguoiDung').innerHTML = listNguoiDung.renderNguoiDung();
    listNguoiDung.ArrnguoiDung = cloneUserList;
}

listNguoiDung.getlocalStorage();
document.querySelector('#tbodyNguoiDung').innerHTML = listNguoiDung.renderNguoiDung();


