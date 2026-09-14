# CLAUDE.md

Chuẩn dự án React (Vite + React Router) — dùng làm "memory" chung cho mọi phiên
làm việc với Claude trên repo này. **Mọi code sinh ra từ Claude Design PHẢI tuân
theo cấu trúc và quy ước dưới đây.**

## Dự án ReelForge
 ReelForge là nền tảng web tự động hoá toàn bộ quy trình sản xuất nội dung cho fanpage Facebook. Từ một chủ đề hoặc từ khoá đầu vào, hệ thống tự tìm nguồn tin, viết lại nội dung, tạo video kèm giọng đọc, và đăng lên fanpage — có một bước con người duyệt trước khi xuất bản. Mục tiêu là giúp người quản lý fanpage ra nội dung đều đặn mỗi ngày mà không phải làm thủ công từng khâu.

## Tech stack
- React 18 + TypeScript
- Vite (dev server + build)
- React Router v6/v7 — dùng **data router** (`createBrowserRouter`) + **layout route** (`<Outlet>`)
- Tailwind CSS (giữ nguyên class từ Claude Design)
- `lucide-react` cho icon
- `clsx` + `tailwind-merge` gộp thành helper `cn()`
- Using scss cho style

## Lệnh
```
dev:   npm run dev
build: npm run build
lint:  npm run lint
```

## Cấu trúc thư mục
Mọi file mới phải đặt đúng chỗ theo cây này:
```
src/
├── main.tsx              # entry — RouterProvider
├── router.tsx            # KHAI BÁO toàn bộ route ở đây (một nguồn sự thật)
├── layouts/
│   └── RootLayout.tsx    # khung: <Sidebar/> + <Header/> + <Outlet/>
├── components/
│   ├── layout/           # Header.tsx, Sidebar.tsx — chrome dùng chung
│   └── ui/               # component tái sử dụng: Button, Card, StatTile...
├── pages/                # mỗi màn hình = 1 page, map vào router.tsx
├── config/
│   └── navigation.ts     # mảng menu → Sidebar render TỪ ĐÂY, không hardcode
├── hooks/                # custom hooks (useXxx)
├── lib/utils.ts          # cn() và helper thuần
├── types/                # type/interface dùng chung
└── styles/index.scss      # @tailwind base/components/utilities
```

## Khuôn routing (bắt buộc)
Header/Sidebar **không** nằm trong page. Chúng sống trong `RootLayout`; page render
qua `<Outlet/>`:

```tsx
// router.tsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardPage from "./pages/DashboardPage";
import SettingsPage from "./pages/SettingsPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true,      element: <DashboardPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
```

```tsx
// layouts/RootLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
```

Menu và route phải khớp với `config/navigation.ts`. Điều hướng dùng
`<NavLink>`/`<Link>`, **không** dùng `<a href>`.

## Quy ước code
- 1 component = 1 file; `export default` trùng tên file (PascalCase).
- Props khai báo tường minh bằng `interface XxxProps`.
- Component > ~150 dòng → tách nhỏ; mỗi khối lặp lại → 1 component trong `ui/`.
- Class Tailwind **giữ nguyên** từ design; class có điều kiện dùng `cn(...)`, không nối chuỗi tay.
- Không nhét logic dữ liệu vào layout — page tự lo dữ liệu của nó.
- Icon lấy từ `lucide-react`.
- Không thêm thư viện mới nếu chưa có trong `package.json`.
- Kho

## Hard rules
- **KHÔNG** redesign giao diện khi convert — chỉ tách file, giữ nguyên class/pixel.
- **KHÔNG** đặt Header/Sidebar bên trong page — luôn ở `RootLayout`.
- **KHÔNG** hardcode danh sách menu trong Sidebar — đọc từ `config/navigation.ts`.
- **KHÔNG** tạo route mà design không ngụ ý; nếu phải đoán, hỏi người dùng.

## Bẫy thường gặp
- Quên `RouterProvider` ở `main.tsx` → `useNavigate`/`NavLink` lỗi context.
- `NavLink` tới route index (`/`) cần prop `end`, nếu không sẽ "active" ở mọi trang.
- Import từ `react-router-dom` (không phải `react-router`) cho web.
