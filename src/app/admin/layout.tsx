import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Scribbles International PreSchool",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
