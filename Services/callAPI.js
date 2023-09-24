function showDetails() {
  var promiseObj = axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?= + `${sp.id-1}`",
  });
}


