// thực hiện render dữ liệu lên giao diện
export default function renderDuLieuGiay(arrGiay, idTheCha = "baiTap2") {
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

export let duongDan = {
  home: "/",
  detail: "/detail",
};
