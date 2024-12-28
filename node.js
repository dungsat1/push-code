function calculateAverageDivisibleBy3(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {  
            sum += arr[i];  
            count++;  
        }
    }
    if (count === 0) {
        return NaN;
    }
    return sum / count;
}
function inputArray() {
    const arr = [];
    let n = parseInt(prompt("Nhập số phần tử của mảng (tối đa 50 phần tử):"));
    if (n < 1 || n > 50) {
        alert("Số phần tử phải từ 1 đến 50.");
        return;
    }
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        arr.push(value);
    }

    return arr;
}
function displayResults(arr) {
    alert("Mảng đã nhập: " + arr.join(", "));
    const average = calculateAverageDivisibleBy3(arr);
    if (isNaN(average)) {
        alert("Không có số nào chia hết cho 3 trong mảng.");
    } else {
        alert("Trung bình cộng của các số chia hết cho 3: " + average.toFixed(2));
    }
}
function main() {
    const arr = inputArray();
    if (arr && arr.length > 0) {
        displayResults(arr);
    }
}
main();