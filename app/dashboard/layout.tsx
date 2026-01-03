type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Readonly<DashboardLayoutProps>) {
  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto bg-purple-500">
      {children}
    </div>
  );
}