function ListProduct() {
  this.mangSP = [];
  this.themSP = function (sp) {
    //lưu obj vào mảng
    this.mangSP.push(sp);
  };
  this.xoaSP = function (maXoa) {
    console.log("phương thức", maXoa);

    //Array: dựa vào index => xóa pt khỏi mảng
    //maXoa => tìm được index sv cần xóa
    /**
     * !findIndex (function(từng phần tử của mảng){
     *      return (biểu thức điều kiện)
     * }
     * 
     * return về index cần tìm
     */

    var indexXoa = this.mangSP.findIndex(function (sp) {
        return sp.maSP == maXoa
    });
    console.log(indexXoa);
    // splice(vị trí cần xóa,số lượng cần xóa)
    this.mangSP.splice(indexXoa, 1);
}
}
