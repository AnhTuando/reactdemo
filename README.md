**Câu lệnh cơ bản npm**

- npm install <package_name>: cài đặt gói cụ thể từ kho NPM  
- npm run: chạy một lệnh được định nghĩa trong trường "scripts" với key tương ứng trong file 'package.json'
- npm install --save <package_name>: cài đặt một gói và thêm vào danh sách phụ thuộc trong file 'package.json' 
- npm uninstall <package_name>: Gỡ cài đặt một gói đã được cài đặt từ trước
- npm start:  lệnh để khởi động ứng dụng được định nghĩa trong trường "scripts" với key "start" trong file package.json

**package.json**
 - Là một tệp cấu hình quan trọng trong các dự án Node.js.
 - Nó chứa thông tin về dự án, các phụ thuộc, cấu hình và các tác vụ xử lý trong dự án
 
 {
  "name": "my-project",
  "version": "1.0.0",
  "description": "Mô tả về dự án",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1",
    "axios": "^0.21.1"
  },
  "devDependencies": {
    "jest": "^27.0.6"
  },
  "author": "Tên tác giả",
  "license": "MIT"
}


- "name": Tên của dự án.
- "version": Phiên bản hiện tại của dự án.
- "description": Mô tả về dự án.
- "main": Đường dẫn tới tệp JavaScript chính của dự án.
- "scripts": Định nghĩa các tác vụ xử lý trong dự án, như start, test, và các tác vụ tùy chỉnh khác.
- "dependencies": Các phụ thuộc cần thiết để chạy dự án trong môi trường sản phẩm.
- "devDependencies": Các phụ thuộc chỉ cần thiết khi phát triển và kiểm thử dự án.
- "author": Tên tác giả hoặc nhóm tác giả của dự án.
- "license": Giấy phép sử dụng dự án, ví dụ: "MIT", "GPL-3.0",...

**JSX**
 Là cú pháp của JavaScript cho phép viết mã HTML tương tự trong mã JavaScript thường được sử dụng trong các thư viện và frameworks JavaScript như React để tạo các thành phần giao diện người dùng
 `const item = <h1>Item</h1>;`
 Biểu thức JavaScript: Bạn có thể sử dụng biểu thức JavaScript bên trong JSX bằng cách đặt chúng trong cặp dấu ngoặc nhọn {}
 `const title = "ABC";`
`const item = <h1>{title}</h1>;`
 Đặt thuộc tính:  đặt thuộc tính trong JSX bằng cách sử dụng cú pháp thuộc tính HTML
 `const input = <input type="text" className="input-field" />;`
 Render JSX: JSX cần được biên dịch thành mã JavaScript thông qua trình biên dịch như Babel để có thể chạy trong trình duyệt
 `ReactDOM.render(element, document.getElementById("root"))`
 
 **TypeScript**
 TypeScript là một ngôn ngữ lập trình mã nguồn mở phát triển bởi Microsoft. Nó là một phần mở rộng của JavaScript, cung cấp kiểu dữ liệu tĩnh và các tính năng khác như lớp, giao diện, và module để phát triển ứng dụng JavaScript lớn và phức tạp hơn.
 Kiểu dữ liệu tĩnh: TypeScript cho phép khai báo kiểu dữ liệu tĩnh cho biến, tham số, giá trị trả về và các thành phần khác trong mã nguồn JavaScript. Điều này giúp phát hiện lỗi kiểu dữ liệu trong quá trình biên dịch và cung cấp tính năng gợi ý thông tin kiểu trong các trình biên dịch và IDE.
 
 
 Lợi ích
- Với static typing, code viết bằng TypeScript dễ dự đoán hơn, và dễ debug hơn.
- Dễ dàng tổ chức code cho các ứng dụng cực lớn và phức tạp nhờ modules, namespaces và hỗ trợ OOP mạnh mẽ.
- TypeScript có một bước biên dịch thành JavaScript, sẽ bắt tất cả các loại lỗi trước khi chúng chạy và làm hỏng một vài thứ.


Một vài kiểu dữ liệu được sử dụng phổ biến nhất:

- Number : Tất cả giá trị số được biểu diễn bởi kiểu number, không có định nghĩa riêng cho số nguyên (interger), số thực (float) hoặc các kiểu khác.
- String : Giống như string của JavaScript có thể được bao quanh bởi ‘dấu nháy đơn’ hoặc “dấu nháy kép”.
- Boolean : true hoặc false, sử dụng 0 và 1 sẽ gây ra lỗi biên dịch.
- Any : Một biến với kiểu này có thể có giá trị là một string, number hoặc bất kỳ kiểu nào.
- Arrays : Có 2 kiểu cú pháp: my_arr: number[]; hoặc my_arr: Array<number>.
- Void : Được sử dụng khi hàm không trả lại bất kỳ giá trị nào.
