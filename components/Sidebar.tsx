"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Settings, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Interviews",
    href: "/interviews",
    icon: Users,
  },
  {
    label: "Resumes",
    href: "/resumes",
    icon: FileText,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full w-64 bg-white border-r border-slate-200">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-400/30">
            H
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-blue-600">
            HirePY
          </span>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                isActive
                  ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-400/20"
                  : "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
              )}
            >
              <link.icon className="w-5 h-5" />
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-200">
        <div className="text-sm text-slate-400 text-center">
          &copy; 2025 HirePY
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
