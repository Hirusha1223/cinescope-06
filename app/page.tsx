import Herobanner from "@/component/landing/hero-banner";

import MainNav from "@/component/ui/main-nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        <Herobanner />
      </main>
    </div>
  );
}
