import Footer from "../components/footer";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";


export default function PrivacyPage() {
  return (
    <div>
        <Navbar/>
        <PrivacyPolicy />
        <Footer/>
    </div>
  );
}
