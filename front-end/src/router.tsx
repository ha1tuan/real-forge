import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import CalendarPage from "./pages/CalendarPage";
import CreateRequestPage from "./pages/CreateRequestPage";
import DashboardPage from "./pages/DashboardPage";
import PipelinePage from "./pages/PipelinePage";
import ReviewPage from "./pages/ReviewPage";
import SettingsPage from "./pages/SettingsPage";

// Path phải khớp với config/navigation.ts.
export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "create", element: <CreateRequestPage /> },
      { path: "pipeline", element: <PipelinePage /> },
      // `:id` tuỳ chọn — mở từ hàng "Chờ duyệt" trong pipeline; không có id thì lấy nội dung chờ duyệt đầu tiên.
      { path: "review/:id?", element: <ReviewPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
