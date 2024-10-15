const str = "Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi.Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á."
const formatStr = str.replace(/[.,]/g, '').split(' ');
let strMaxLength = '';
let count = 0;
formatStr.forEach(s => {
    if (s.length > count) {
        count = s.length;
        strMaxLength = s;
    }
})
console.log(strMaxLength);