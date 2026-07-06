# Chợ MoMoer 🛒

Marketplace nội bộ cho nhân viên MoMo - nơi mua bán, trao đổi, kinh doanh linh tinh.

## Tính năng

- ✅ Tìm kiếm sản phẩm
- ✅ Lọc theo danh mục (Đồ ăn, Đồ cũ, Dịch vụ, Đầu tư)
- ✅ Đăng bán/pass đồ
- ✅ Chat với người bán
- ✅ Giao diện responsive
- ✅ Mock data

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Design**: Momo Design System
- **Deployment**: Ready for Vercel, Netlify, GitHub Pages

## Cài đặt

```bash
# Clone repo
git clone <repo-url>
cd cho-momoer

# Chạy local (dev)
python3 -m http.server 8000

# Hoặc
npm run dev
```

Truy cập: `http://localhost:8000`

## Deploy

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### GitHub Pages

1. Push code lên GitHub
2. Settings → Pages
3. Chọn `main` branch
4. Save

## Cấu trúc

```
cho-momoer/
├── index.html       # Main page
├── styles.css       # Styling
├── script.js        # Logic
├── package.json
└── README.md
```

## Mock Data

8 sản phẩm mẫu:
- 2 đồ ăn
- 2 đồ cũ
- 2 dịch vụ
- 1 đầu tư
- 1 khác

Tạo mới qua form "Đăng bán/Pass đồ"

## Tính năng tiếp theo

- [ ] Backend API
- [ ] Authentication
- [ ] Chat realtime
- [ ] Payment
- [ ] User profiles
- [ ] Reviews/Ratings

## Author

Thuộng Nguyễn

---

Made with ❤️ for MoMo Team
