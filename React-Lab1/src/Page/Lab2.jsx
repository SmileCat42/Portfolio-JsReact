import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Features from "../Component/Features";
import Pricing from "../Component/Pricing";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";

function Lab2() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Lab2