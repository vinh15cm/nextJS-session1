import React from "react";

export default function page() {
  return (
    <div>
      <p>app: Tổ chức, quản lý các định tuyến và thành phần của ứng dụng</p>
      <p>node_modules: Chứa các package, thư viện cung cấp cho dự án</p>
      <p>
        gitignore: Xác định các tệp và thư mục sẽ bị bỏ qua khi đưa mã nguồn lên
        Git
      </p>
      <p>package.json: Chứa thông tin về dự án và danh sách các phụ thuộc</p>
      <p>public: Chứa các thành phần tĩnh như hình ảnh, video,...</p>
      <p>next.config.js: Tệp cấu hình cho Next.js</p>
      <p>tailwind.config.ts: Chứa cấu hình thư viện tailwind CSS</p>
      <p>tsconfig.json: Tệp cấu hình TypeScript</p>
    </div>
  );
}
