//! Hàm dùng chung và biến toàn cục

// console.log(dssv.mangSV)

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
  }); //pending
}
function GetProduct() {
  var promiseObj = axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product",
  }); //pending

  // then, catch
  //result / response
  promiseObj.then(function (result) {
    //thành công
    console.log(result); //! mỗi BE trả kết quả khác nhau
    console.log(result.data.content); //! mỗi BE trả kết quả khác nhau

    //TODO: Hiển thị danh sách
    hienThiDSSP(result.data.content);
  });

  promiseObj.catch(function (error) {
    //thất bại
    console.log(error);
    // alert("Hệ thống đang bảo trì");
  });
}

GetProduct();

function hienThiDSSP(mang) {
  var content = ""; // chứa chuỗi các thẻ tr

  //! map(phần tử của mảng, vị trí phần tử) : duyệt mảng, lấy từng phần tử của mảng mà không cần vị trí. Chỉ dùng với Array. Chỉ dừng khi hết mảng.
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
    // content mới = content ban đầu + trELE
  });

  // console.log(content);
  queryELE("#allsp").innerHTML = content;
}

function showDetails() {
  var promiseObj = axios({
    method: "get",
    url: "https://shop.cyberlearn.vn/api/Product/getbyid",
  }); //pending

  promiseObj.then(function (result) {
    //thành công
    console.log(result); //! mỗi BE trả kết quả khác nhau
    console.log(result.data.content); //! mỗi BE trả kết quả khác nhau

    //TODO: Hiển thị danh sách
    ShowDetail(result.data.content);
  });

  promiseObj.catch(function (error) {
    //thất bại
    console.log(error);
    // alert("Hệ thống đang bảo trì");
  });
}

function ShowDetail(mang) {
  var content = ""; // chứa chuỗi các thẻ tr

  //! map(phần tử của mảng, vị trí phần tử) : duyệt mảng, lấy từng phần tử của mảng mà không cần vị trí. Chỉ dùng với Array. Chỉ dừng khi hết mảng.
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
    // content mới = content ban đầu + trELE
  });

  // console.log(content);
  queryELE("#detail").innerHTML = content;
}

// function listProduct() {
//   var promiseObj = axios({
//     method: "get",
//     url: "https://shop.cyberlearn.vn/api/Product",
//   }); //pending

//   promiseObj.then(function (result) {
//     //thành công
//     console.log(result); //! mỗi BE trả kết quả khác nhau
//     console.log(result.data.content); //! mỗi BE trả kết quả khác nhau

//     //TODO: Hiển thị danh sách
//     List(result.data.content);
//   });

//   promiseObj.catch(function (error) {
//     //thất bại
//     console.log(error);
//     // alert("Hệ thống đang bảo trì");
//   });
// }

// function List(mang) {
//   var content = ""; // chứa chuỗi các thẻ tr

//   //! map(phần tử của mảng, vị trí phần tử) : duyệt mảng, lấy từng phần tử của mảng mà không cần vị trí. Chỉ dùng với Array. Chỉ dừng khi hết mảng.
//   mang.map(function (sp) {
//     content += `
//     <thead>
//     <tr>
//     <th><input class="list-check" type="checkbox" checked/></th>
//     <th>${sp.id}</th>
//     <th>${sp.image}</th>
//     <th>${sp.name}</th>
//     <th>${sp.price}</th>
//     <th>quantity</th>
//     <th>total</th>
//     <th>action</th>
//     </tr>
//   </thead>
//     `;
//     // content mới = content ban đầu + trELE
//   });
//   queryELE("#tbodyProduct").innerHTML = content;
// }
