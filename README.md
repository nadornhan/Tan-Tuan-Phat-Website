# Nội thất Tân Tuấn Phát

Website danh mục sản phẩm được chuyển từ HTML/CSS/JavaScript sang Next.js App Router + TypeScript. Giữ nội dung, hình ảnh, font chữ, danh mục và thông tin liên hệ hiện có. Chưa tích hợp giỏ hàng hoặc thanh toán.

## Chạy local

Yêu cầu Node.js 22 trở lên (khuyến nghị Node.js 24 LTS).

```powershell
npm ci
npm run dev
```

Mở http://localhost:3000.

## Kiểm tra và build

```powershell
npm run typecheck
npm run build
```

Build tạo website tĩnh trong `out/`. Không mở trực tiếp HTML bằng `file://`; dùng máy chủ HTTP. `node_modules/`, `.next/`, `out/` và cấu hình môi trường không được commit.

## Cấu trúc

- `src/app/`: layout, metadata, trang chủ và CSS.
- `src/components/`: storefront, thẻ sản phẩm và hộp thoại chi tiết.
- `src/data/products.ts`: 27 mục sản phẩm và 5 mục nổi bật được giữ riêng như bản cũ; kiểu dữ liệu danh mục và sản phẩm.
- `public/`: toàn bộ ảnh, font, CNAME và file xác minh Google giữ nguyên đường dẫn truy cập.

Chỉnh sửa danh sách tại `src/data/products.ts`; thêm ảnh vào `public/sp/`. Giữ ID ổn định khi sắp xếp lại sản phẩm. Các mục nổi bật có thể trùng sản phẩm trong danh mục như website gốc; cần chuẩn hóa ID/SKU trước khi thêm quản lý tồn kho.

CSS hiện tại được giữ để hạn chế thay đổi giao diện. Logic lọc danh mục dùng React state; hộp thoại dùng native dialog hỗ trợ Escape, khóa focus và khôi phục focus về sản phẩm.

## Triển khai

Hiện cấu hình `output: 'export'` để tiếp tục hỗ trợ hosting tĩnh. Triển khai **nội dung `out/`**, không dùng thư mục mã nguồn làm web root. GitHub Pages dùng workflow `.github/workflows/deploy.yml` để build và upload `out/`, sau đó triển khai lên tên miền `tantuanphat.com`. CNAME `tantuanphat.com` và `.nojekyll` được đưa vào output. Cấu hình này phục vụ tên miền gốc; nếu dùng URL dạng `username.github.io/repository`, cần cấu hình đường dẫn cơ sở cho cả Next.js và tài nguyên.

Workflow `check.yml` kiểm tra mã nguồn. Workflow `deploy.yml` tự triển khai mỗi lần push lên `main`, hoặc có thể chạy thủ công từ GitHub Actions. Chỉ job triển khai có quyền ghi GitHub Pages; nhánh tính năng không xuất bản website.

## Giai đoạn thanh toán sau

Khi thêm đặt hàng/thanh toán, bỏ `output: 'export'`, triển khai Next.js trên môi trường hỗ trợ server, thêm cơ sở dữ liệu và các endpoint phía server. Xác minh giá, tồn kho và webhook thanh toán phía server; không đặt khóa bí mật trong biến `NEXT_PUBLIC_*`. Việc chuyển nền tảng hiện tại chưa tạo backend thanh toán.
