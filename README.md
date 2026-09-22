# Tính thuế thu nhập cá nhân 2025

Máy tính thuế thu nhập cá nhân chạy trực tiếp trên trình duyệt, áp dụng biểu thuế lũy tiến từng phần theo năm. Công cụ hiển thị chi tiết thu nhập tính thuế, số tiền chịu thuế ở từng bậc và tổng thuế dự kiến.

**Demo:** https://otrumb.github.io/tinh-thue-tncn/

## Tính năng

- Nhập tổng thu nhập, số người phụ thuộc, số tháng giảm trừ và bảo hiểm được trừ.
- Tách số tiền chịu thuế và tiền thuế theo từng bậc.
- Định dạng số theo locale Việt Nam.
- Hướng dẫn dựng công thức tương đương trong Excel.
- Chạy hoàn toàn phía client, không gửi dữ liệu nhập lên server.

## Chạy cục bộ

Repo chỉ dùng một file HTML. Clone repo rồi mở `index.html` bằng trình duyệt:

```bash
git clone https://github.com/otrumb/tinh-thue-tncn.git
cd tinh-thue-tncn
```

Có thể chạy qua HTTP server cục bộ:

```bash
python -m http.server 8000
```

Sau đó mở http://localhost:8000.

## Công nghệ

- HTML
- JavaScript
- Tailwind CSS qua CDN
- GitHub Pages

## Lưu ý

Kết quả chỉ mang tính tham khảo, dựa trên các mức giảm trừ và biểu thuế được ghi trong mã nguồn cho năm 2025. Hãy đối chiếu quy định hiện hành hoặc tham khảo chuyên gia thuế trước khi kê khai.
