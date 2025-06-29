import AnnouncementBar from "./components/homepage/AnnouncementBar";
import Footer from "./components/homepage/Footer";
import HeroSection from "./components/homepage/HeroSection";
import Navbar from "./components/homepage/Navbar";

export default function Home() {
    return (
        <div>
            <AnnouncementBar />
            <div className="container mx-auto">
                <Navbar />
                <HeroSection />
                <Footer />
            </div>
        </div>
    );
}
