import Footer from "./Component/Footer";
import Header from "./Component/Header";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-full flex flex-col"><Header/>{children}<Footer/></body>
    </html>
  );
}
