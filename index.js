// ôn tập hiển thị nội dung lên giao diện
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
// document.getElementById("baiTap1").innerHTML = content;

// lấy dữ liệu từ back end
function layDanhSachGiay() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });

  promise
    .then((res) => {
      console.log(res.data.content);
      renderDulieuGiay(res.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
}
layDanhSachGiay();
// render dữ liệu lên giao dịen
function renderDulieuGiay(arrGiay, idTheCha = "baiTap2") {
  let content = "";
  for (let giay of arrGiay) {
    let { image, name, shortDescription, price } = giay;
    content += `
        <div class="col-4">
          <!-- hiển thị hình -->
          <img
            src="${image}"
            class="w-100"
            alt=""
          />
          <!-- tên sản phẩm  -->
          <h4>${name}</h4>
          <!-- mô tả ngắn -->
          <p>
          ${shortDescription}
          </p>
          <!-- sô tiền  -->
          <p>${price}$</p>
          <!-- nút chức năng  -->
          <button class="btn btn-info">Mua Ngay</button>
        </div>
    `;
  }
  document.getElementById(idTheCha).innerHTML = content;
}
