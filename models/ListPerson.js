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
            this.users.splice(idXoa, 1);
            return true;
        }
        return false;
    }
    layNguoiDung(id) {
        let userUpdate = this.ArrnguoiDung.find(user => user.id == id);
        return userUpdate;
    }
    capNhatNguoiDung(idUpdate, updatedUser) {
        let user = this.getUser(idUpdate);
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
            <td><button class="btn btn-danger" onclick="xoaMonAn('${nguoiDungMoi.id}')">Xoá</button>
                <button class="btn btn-primary" onclick="chinhSua('${nguoiDungMoi.id}')">Sửa</button>
            <td></td>
              </tr>
            `;

        }

        return trNguoiDung;
    }

}



