function queryELE(query) {
  return document.querySelector(query);
}

//Lưu trữ ở Local Storage (trình duyệt web)
function setLocalStorage() {
  //? localStorage: đối tương có sẵn của JS giúp thao tác với local storage
  //! localStorage chỉ lưu data là JSON
  // cần lưu mảng SV (array obj) => JSON
  //? JSON: đối tượng có sẵn giúp xử lý JSON
  localStorage.setItem("DSSP", JSON.stringify(LP.mangSP));
}
function getLocalStorage() {
  //!kiểm tra có tồn lại localStorage cần lấy không
  if (localStorage.getItem("DSSP") != null) {
    //có local
    //lấy dữ liệu JSON từ local => chuyển từ JSON sang mảng obj => lưu vào biến mangSV
    LP.mangSP = JSON.parse(localStorage.getItem("DSSP"));
    hienThiDSSV(LP.mangSP);
  }
}
getLocalStorage();

function Sighup() {
  var promiseObj = axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
  });
}
function GetProduct() {
  var promiseObj = axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product",
  });

  promiseObj.then(function (result) {
    console.log(result);
    console.log(result.data.content);

    hienThiDSSP(result.data.content);
  });

  promiseObj.catch(function (error) {
    console.log(error);
  });
}

GetProduct();

function hienThiDSSP(mang) {
  var content = "";

  mang.map(function (sp) {
    content += `
    <div class="row">
      <div class="col" onclick="ShowDetail(${sp.id - 1}">
            <div class="item"><img style="width: 200px;
            height: 200px;
            text-align: center;" src="${sp.image}" alt="" /></div>
            <h2 class="product__name">${sp.name}</h2>
            <p class="product__des">${sp.alias}</p>
            <div class="product__buy">
              <div class="btn btn-buy">Buy now</div>
              <div class="product__price">$${sp.price}</div>
            </div>
          </div>
    </div>
    `;
  });

  // console.log(content);
  queryELE("#allsp").innerHTML = content;
}

function showDetails() {
  var promiseObj = axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid",
  });

  promiseObj.then(function (result) {
    //thành công
    console.log(result);
    console.log(result.data.content);

    //TODO: Hiển thị danh sách
    ShowDetail(result.data.content);
  });

  promiseObj.catch(function (error) {
    console.log(error);
  });
}

function ShowDetail(mang) {
  var content = "";

  mang.map(function (sp) {
    content += `
    <div class="row">
      <div class="col" onclick="ShowDetail(${sp.id - 1})">
            <div class="item"><img style="width: 200px;
            height: 200px;
            text-align: center;" src="${sp.image}" alt="" /></div>
            <h2 class="product__name">${sp.name}</h2>
            <p class="product__des">${sp.alias}</p>
            <div class="product__buy">
              <div class="btn btn-buy">Buy now</div>
              <div class="product__price">$${sp.price}</div>
            </div>
          </div>
    </div>
    `;
  });

  // console.log(content);
  queryELE("#detail").innerHTML = content;
}
