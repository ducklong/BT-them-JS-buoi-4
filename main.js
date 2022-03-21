// bai 1:
// Nhập: tạo các biến year month day để ng dùng nhập ngày tháng năm
// Xử lí: xét các trường hợp có thể xảy ra khi tìm ngày tháng năm của ngày tiếp theo
// năm nhuận tháng 2 ngày bé hơn hoặc bằng 28
// năm nhuận tháng 2 ngày bằng 29
// năm ko nhuận các tháng 1 3 5 7 8 ngày bé hơn 30
//  năm ko nhuận các tháng 1 3 5 7 8 ngày =31
// năm ko nhuận các tháng 4 6 9 11 ngày bé hơn 30
// năm  ko nhuận các tháng  4 6 9 11 ngày = 30
//  năm ko nhuận tháng 12 ngày <=30
// năm ko nhuận tháng 12 ngày ==31
//  năm nhuận tháng 12 ngày <=30
// năm nhuận tháng 12 ngày ==31
// tháng 2 của năm k nhuận có 28 ngày

// Xuất: dữ liệu ngày tháng năm của ngày tiếp theo

var year = 2000;
var month = 2;
var day = 28;
if (year % 4 == 0 && year % 100 !== 0 && month == 2 && day <= 28) {
  // năm nhuận tháng 2 ngày bé hơn hoặc bằng 28
  console.log("Hôm nay");
  console.log(year);
  console.log(month);
  console.log(day + 1);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (year % 4 == 0 && year % 100 !== 0 && month == 2 && day == 29) {
  // năm nhuận tháng 2 ngày bằng 29
  console.log("Hôm nay");
  console.log(year);
  console.log(month + 1);
  console.log(day - 28);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (
  year % 4 !== 0 &&
  year % 100 !== 0 &&
  month !== 4 &&
  month !== 6 &&
  month !== 9 &&
  month !== 11 &&
  month !== 12 &&
  month !== 2 &&
  day < 30
) {
  // năm ko nhuận các tháng 1 3 5 7 8 ngày bé hơn 30
  console.log("Hôm nay");
  console.log(year);
  console.log(month);
  console.log(day + 1);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (
  year % 4 !== 0 &&
  year % 100 !== 0 &&
  month !== 4 &&
  month !== 6 &&
  month !== 9 &&
  month !== 11 &&
  month !== 12 &&
  month !== 2 &&
  day == 31
) {
  //  năm ko nhuận các tháng 1 3 5 7 8  ngày=31
  console.log("Hôm nay");
  console.log(year);
  console.log(month + 1);
  console.log(day - 30);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (
  year % 4 !== 0 &&
  year % 100 !== 0 &&
  month !== 1 &&
  month !== 3 &&
  month !== 5 &&
  month !== 7 &&
  month !== 8 &&
  month !== 2 &&
  month !== 12 &&
  day < 30
) {
  // năm ko nhuận các tháng 4 6 9 11 ngày <= 30
  console.log("Hôm nay");
  console.log(year);
  console.log(month);
  console.log(day + 1);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (
  year % 4 !== 0 &&
  year % 100 !== 0 &&
  month !== 1 &&
  month !== 3 &&
  month !== 5 &&
  month !== 2 &&
  month !== 7 &&
  month !== 8 &&
  month !== 12 &&
  day == 31
) {
  // năm ko nhuận các tháng  4 6 9 11 ngày == 31
  console.log("Hôm nay");
  console.log(year);
  console.log(month + 1);
  console.log(day - 30);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (year % 4 !== 0 && year % 100 !== 0 && month == 12 && day <= 30) {
  // năm ko nhuận tháng 12 ngày <=30
  console.log("Hôm nay");
  console.log(year);
  console.log(month);
  console.log(day + 1);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (year % 4 !== 0 && year % 100 !== 0 && month == 12 && day == 31) {
  // năm ko nhuận tháng 12 ngày ==31
  console.log("Hôm nay");
  console.log(year + 1);
  console.log(month - 11);
  console.log(day - 30);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (year % 4 == 0 && year % 100 !== 0 && month == 12 && day <= 30) {
  // năm nhuận tháng 12 ngày <=30
  console.log("Hôm nay");
  console.log(year);
  console.log(month);
  console.log(day + 1);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (year % 4 == 0 && year % 100 !== 0 && month == 12 && day == 31) {
  // năm nhuận tháng 12 ngày ==31
  console.log("Hôm nay");
  console.log(year + 1);
  console.log(month - 11);
  console.log(day - 30);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (month == 2 && day <= 27) {
  console.log("Hôm nay");
  console.log(year);
  console.log(month);
  console.log(day + 1);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
} else if (month == 2 && day == 28) {
  console.log("Hôm nay");
  console.log(year);
  console.log(month + 1);
  console.log(day - 27);
  console.log("Hôm qua");
  console.log(year);
  console.log(month);
  console.log(day - 1);
}

// bai 2
// nhập: tạo biến để người dùng nhập vào ngày tháng năm
// xử lí: các tháng 2 của năm ko nhuận có 28 ngày năm nhuận có 29 này
// các tháng 1 3 5 7 8 12 có 31 ngày các tháng còn lại có 30 ngày
// xuất: xuất kết quả cho người dùng

var years = 2004;
var months = 2;
var days = 28;

if (years % 4 == 0 && years % 100 !== 0 && months == 2) {
  // năm nhuận tháng 2
  console.log("tháng này có 29 ngày");
} else if (years % 4 !== 0 && years % 100 !== 0 && months == 2) {
  // năm  ko nhuận tháng 2
  console.log("tháng này có 28 ngày");
} else if (
  //   nam ko nhuan cac thang thang 4 6 9 11
  months !== 1 &&
  months !== 3 &&
  months !== 5 &&
  months !== 7 &&
  months !== 8 &&
  months !== 12 &&
  months !== 2
) {
  console.log("tháng này có 30 ngày");
} else if (
  months !== 4 &&
  months !== 6 &&
  month !== 9 &&
  month !== 11 &&
  months !== 2
) {
  // nam ko nhuan cac thang 4 6 9 11
  console.log("thang nay co 31 ngay");
}

// bai 3
// nhập: tạo các biến soNguyen cho ngươi dùng nhập vào số nguyên có 3 chữ số
// xử lí: cho soNguyen % 10 để lấy hàng đơn vị cho (soNguyen / 10) % 10 để
// lấy hàng chục cho soNguyen/ 100 để lấy hàng trăm
// xuất: xuất ra cách đọc số nguyên 3 chữ số

var soNguyen = 312;

if (soNguyen / 100 == 1) {
  console.log("Một trăm");
} else if (soNguyen % 10 == 2) {
  console.log("Hai trăm ");
} else if (soNguyen % 10 == 3) {
  console.log("Ba trăm ");
} else if (soNguyen % 10 == 4) {
  console.log("Bốn trăm ");
} else if (soNguyen % 10 == 5) {
  console.log("Năm trăm ");
} else if (soNguyen % 10 == 6) {
  console.log("Sáu trăm ");
} else if (soNguyen % 10 == 7) {
  console.log("Bảy trăm ");
} else if (soNguyen % 10 == 8) {
  console.log("Tám trăm ");
} else if (soNguyen % 10 == 9) {
  console.log("Chín trăm ");
}


if ((soNguyen / 10) % 10 == 1) {
  console.log("mười");
} else if (soNguyen % 10 == 2) {
  console.log("hai mươi");
} else if (soNguyen % 10 == 3) {
  console.log("ba mươi");
} else if (soNguyen % 10 == 4) {
  console.log("bốn mươi");
} else if (soNguyen % 10 == 5) {
  console.log("năm mươi");
} else if (soNguyen % 10 == 6) {
  console.log("sáu mươi");
} else if (soNguyen % 10 == 7) {
  console.log("bảy mươi");
} else if (soNguyen % 10 == 8) {
  console.log("tám mươi");
} else if (soNguyen % 10 == 9) {
  console.log("chín mươi");
}

if (soNguyen % 10 == 1) {
  console.log("Một ");
} else if (soNguyen % 10 == 2) {
  console.log("Hai ");
} else if (soNguyen % 10 == 3) {
  console.log("Ba");
} else if (soNguyen % 10 == 4) {
  console.log("Bốn ");
} else if (soNguyen % 10 == 5) {
  console.log("Năm ");
} else if (soNguyen % 10 == 6) {
  console.log("Sáu ");
} else if (soNguyen % 10 == 7) {
  console.log("Bảy ");
} else if (soNguyen % 10 == 8) {
  console.log("Tám ");
} else if (soNguyen % 10 == 9) {
  console.log("Chín ");
}