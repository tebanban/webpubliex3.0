import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout() {
  return (
    <div className="font-uni bg-white text-black" id="top">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
