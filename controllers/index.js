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
    }

}

