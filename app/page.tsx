import FeaturedMovies from "@/component/landing/featured-movies";
import Herobanner from "@/component/landing/hero-banner";
import Footer from "@/component/ui/Footer";

import MainNav from "@/component/ui/main-nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        <Herobanner />
        <FeaturedMovies />
        <Footer />
      </main>
    </div>
  );
}
