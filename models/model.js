export class Person {
    id = "";
    name = "";
    address = "";
    email = "";
    userChoose = "";
}

export class Stundent extends Person {
    diemToan = 0;
    diemLy = 0;
    diemHoa = 0;
    tinhDiemTB() {
        return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    }
}

export class Employee extends Person {
    soNgayLam = 0;
    Luong = 0;
    tinhLuong() {
        return this.soNgayLam * this.Luong;
    }
}

export class Customer extends Person {
    tenCongTy = "";
    hoaDon = "";
    danhGia = "";
}