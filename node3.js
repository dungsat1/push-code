function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}
function getDaysInMonth(month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
        return 29;
    }
    return daysInMonth[month - 1];
}
function isValidDateFormat(dateStr) {
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/; 
    return regex.test(dateStr);
}
function calculateDays() {
    let input = prompt("Nhập tháng và năm theo định dạng MM/yyyy:");
    if (!isValidDateFormat(input)) {
        alert("Định dạng nhập vào không hợp lệ. Vui lòng nhập theo định dạng MM/yyyy.");
        return;
    }
    const [month, year] = input.split("/").map(num => parseInt(num));
    const days = getDaysInMonth(month, year);
    alert(`Số ngày trong tháng ${month}/${year} là: ${days}`);
}
calculateDays();
