import { Person, Stundent, Employee, Customer } from "./model.js";

export class ListPerson {
    ArrnguoiDung = [];

    themNguoiDung(nguoiDungMoi, chonND) {
        this.ArrnguoiDung.push(nguoiDungMoi);
        console.log(this.ArrnguoiDung);
        return this.ArrnguoiDung;
    }

    xoaNguoiDung(id) {
        let idXoa = this.ArrnguoiDung.findIndex(user => user.id == id);
        console.log(idXoa);
        if (idXoa != -1) {
            this.ArrnguoiDung.splice(idXoa, 1);
            return true;
        }
        return false;
    }
    layNguoiDung(id) {
        let userUpdate = this.ArrnguoiDung.find(user => user.id == id);
        return userUpdate;
    }
    capNhatNguoiDung(idUpdate, updatedUser) {
        let user = this.layNguoiDung(idUpdate);
        if (user) {
            for (let key in user) {
                user[key] = updatedUser[key];
            }
            return true;
        }
        return false;
    }
    renderNguoiDung() {
        let trNguoiDung = '';
        for (let nguoiDung of this.ArrnguoiDung) {
            let nguoiDungMoi = new Person();
            nguoiDungMoi = { ...nguoiDungMoi, ...nguoiDung }

            trNguoiDung += `
            <tr>
            <td>${nguoiDungMoi.id}</td>
            <td>${nguoiDungMoi.name}</td>
            <td>${nguoiDungMoi.address}</td>
            <td>${nguoiDungMoi.email}</td>
            <td>${nguoiDungMoi.userChoose}</td>
            <td><button class="btn btn-danger"  onclick="deleteUser(${nguoiDungMoi.id})">Xoá</button>
                <button class="btn btn-primary" onclick="updateUser(${nguoiDungMoi.id})" data-bs-toggle="modal"
                data-bs-target="#exampleModal">Sửa</button>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalChiTiet" 
                onclick="renderModal(${nguoiDungMoi.id})">
                Chi Tiết</button>
            </button>
         
              </tr>
            `;

        }

        return trNguoiDung;
    }
    renderChiTiet(value, id) {
        if (value == 1) {
            let pickUser = this.layNguoiDung(id);
            console.log(this.layNguoiDung(id))
            let trNguoiDung = "";
            trNguoiDung = +`
                
                <p class="card-text">Mã Người Dùng:${pickUser.id}</p>
                <h5 class="card-title">${pickUser.name}</h5>
                <p class="card-text">Email:${pickUser.email}</p>
                <p class="card-text">Địa Chỉ:${pickUser.address}</p>
                <p class="card-text">Loại:${pickUser.userChoose}</p>
                <p class="card-text">Điểm Toán:${pickUser.diemToan}</p>
                <p class="card-text">Điểm Lý:${pickUser.diemLy}</p>
                <p class="card-text">Điểm Hóa:${pickUser.diemHoa}</p>
                <p class="card-text">Điểm Trung Bình:</p>
                `;
            console.log(trNguoiDung);
            return trNguoiDung;
        } else if (value == 2) {
            let pickUser = this.layNguoiDung(id);
            console.log(this.layNguoiDung(id))
            let trNguoiDung = "";
            trNguoiDung = +`
            <p class="card-text">Mã Người Dùng:${pickUser.id}</p>
                <h5 class="card-title">${pickUser.name}</h5>
                <p class="card-text">Email:${pickUser.email}</p>
                <p class="card-text">Địa Chỉ:${pickUser.address}</p>
                <p class="card-text">Loại:${pickUser.userChoose}</p>
                <p class="card-text">Số ngày làm:${pickUser.soNgayLam}</p>
                <p class="card-text">Lương:${pickUser.Luong}</p>
                <p class="card-text">Tổng Lương:</p>
                `;
            console.log(trNguoiDung);
            return trNguoiDung;
        } else if (value == 3) {
            let pickUser = this.layNguoiDung(id);

            let trNguoiDung = "";
            trNguoiDung = +`
            <p class="card-text">Mã Người Dùng:${pickUser.id}</p>
                <h5 class="card-title">${pickUser.name}</h5>
                <p class="card-text">Email:${pickUser.email}</p>
                <p class="card-text">Địa Chỉ:${pickUser.address}</p>
                <p class="card-text">Loại:${pickUser.userChoose}</p>
                <p class="card-text">Tên Công Ty:${pickUser.tenCongTy}</p>
                <p class="card-text">Hóa Đơn:${pickUser.hoaDon}</p>
                <p class="card-text">Đánh Gía:</p>
                `;
            console.log(trNguoiDung);
            return trNguoiDung;

        }

    }
    filter(value) {
        if (value != "all") {
            this.ArrnguoiDung = this.ArrnguoiDung.filter(user => user.chonNguoiDung == value);
        }
        return this.ArrnguoiDung;
    }
    savelocalStorage() {
        let usersJson = JSON.stringify(this.ArrnguoiDung);
        localStorage.setItem("Mảng Người Dùng", usersJson);
    }

    getlocalStorage() {
        if (localStorage.getItem("Mảng Người Dùng")) {
            let users = JSON.parse(localStorage.getItem("Mảng Người Dùng"));
            this.ArrnguoiDung = users;
        }
    }
}



