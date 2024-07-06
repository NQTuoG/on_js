// import renderDuLieuGiay from "./util.js";
import { duongDan as path } from "./util.js";
// ôn tập hiển thị nội dung lên giao diện

let duongDan = "Kiên nhóc";
let arrMonAn = [
  {
    ten: "Mì xào",
    soLuong: 5,
    gia: 10000,
    trangThai: true,
  },
  {
    ten: "Bún bò",
    soLuong: 3,
    gia: 15000,
    trangThai: false,
  },
  {
    ten: "Sushi",
    soLuong: 50,
    gia: 100000,
    trangThai: true,
  },
  {
    ten: "Mì cay",
    soLuong: 12,
    gia: 30000,
    trangThai: false,
  },
];

let content = "";
for (let monAn of arrMonAn) {
  let { ten, soLuong, gia, trangThai } = monAn;
  if (trangThai) {
    content += `
   <div class="col-3">
        <!-- chứa tên món  -->
        <h3>${ten}</h3>
        <!-- chứa số lượng món  -->
        <p>${soLuong}</p>
        <!-- chứa giá tiền  -->
        <p>${gia}</p>
      </div>
  `;
  }
}
document.getElementById("baiTap1").innerHTML = content;

// lấy dữ liệu từ BE
function layDanhSachGiay() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise
    .then((res) => {
      console.log(res);
      // res.data.content
      renderDuLieuGiay(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}

function duaNguoiDiToi(id) {
  // window.location.href giúp chuyển hướng người dùng tới một trang web khác
  // window.location.href = `https://cybersoft-crypto.vercel.app/detail.html?id=${id}`;
  window.location.href = `http://127.0.0.1:5501/detail.html?id=${id}`;
}

duaNguoiDiToi(7);
function renderDuLieuGiay(arrGiay, idTheCha = "baiTap2") {
  let content = "";
  for (let giay of arrGiay) {
    let { image, name, price, shortDescription, id } = giay;
    content += `
       <div class="col-4">
          <!-- hiển thị hình  -->
          <img src=${image} class="w-100" alt="">
          <!-- tên sản phẩm  -->
          <h4>${name}</h4>
          <!-- mô tả ngắn  -->
          <p>${shortDescription}</p>
          <!-- số tiền  -->
          <p>${price}</p>
          <!-- nút chức năng mua ngay  -->
          <button onclick="duaNguoiDiToi(${id})" class="btn btn-dark">Mua ngay</button>
        </div>
      `;
  }
  document.getElementById(idTheCha).innerHTML = content;
}
layDanhSachGiay();

console.log(duongDan);
console.log(path);
