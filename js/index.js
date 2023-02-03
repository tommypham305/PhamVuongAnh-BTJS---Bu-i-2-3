//BT1:
function tinhLuong() {
    //input :luongNhanVien , soNgayLam
    var luongNhanVien1Ngay = document.getElementById('luongNhanVien').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    //output: tienTip :number
    var tienLuong = 0;

    //process:
    tienLuong = luongNhanVien1Ngay * soNgayLam;

    document.getElementById('tongTienLuongNhanVien').innerHTML = tienLuong;
}

//BT2
function trungBinh() {
    //input : giaTriA ,giaTriB,giaTriC,giaTriDgiaTriE
    var giaTriA = document.getElementById('soThucA').value;
    var giaTriB = document.getElementById('soThucB').value;
    var giaTriC = document.getElementById('soThucC').value;
    var giaTriD = document.getElementById('soThucD').value;
    var giaTriE = document.getElementById('soThucE').value;

    //output: tinhTrungBinh :number
    var tingTrungBinh = 0;

    //process:
    tingTrungBinh = (Number(giaTriA) + Number(giaTriB) + Number(giaTriC) + Number(giaTriD) + Number(giaTriE)) / 5;
    document.getElementById('giaTriTrungBinh').innerHTML = tingTrungBinh;
}

//BT3

function chuyenDoiTien() {
    //input : usdPrice , tiGia
    var usdPrice = document.getElementById('usdPrice').value;
    const tiGia = document.getElementById('tiGia').value;

    //output : vndPrice :number
    var vndPrice = 0;

    //process :
    vndPrice = usdPrice * tiGia;
    document.getElementById('vndPrice').innerHTML = vndPrice.toLocaleString();
}

//BT4
function congThuc() {
    //input : chieuDai , chieuRong
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;

    //output: chuVi , dienDich : number
    var chuVi = 0;
    var dienTich = 0;

    //process:
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    dienTich = chieuDai * chieuRong;
    document.getElementById('ketQuaChuVi').innerHTML = chuVi;
    document.getElementById('ketQuaDienTich').innerHTML = dienTich;

}

// Bài tập 5: Tính tổng 2 ký số của số cần nhập 
function tinhTong2KySo() {
    /* Input
       soCanNhap: number  */
    var soCanNhap = Number(document.getElementById('soCanNhap').value);
    /* Output 
       tong2KySo:number */
    var tong2KySo = 0;
    // Process
    var soHangDonVi = soCanNhap % 10;
    var soHangChuc = Math.floor(soCanNhap / 10);
    tong2KySo = soHangDonVi + soHangChuc;

    document.getElementById('tong2KySo').innerHTML = tong2KySo;
}