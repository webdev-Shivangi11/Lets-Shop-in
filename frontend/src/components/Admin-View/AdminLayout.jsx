import { Outlet } from "react-router-dom"; 
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { useState } from "react";

function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex  p-4 md:p-6 bg-amber-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;