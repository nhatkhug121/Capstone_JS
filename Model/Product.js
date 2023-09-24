function Pruduct(ma, img, ten, gia, soluong) {
  this.maSP = ma;
  this.img = img;
  this.tenSP = ten;
  this.giaSP = gia;
  this.soLuong = soluong;
  this.tong = 0;
  this.Total = function () {
    this.tong = soLuong * gia;
  };
}
