import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Task Manager",
  description: "powered by ANKIT SINGH YADAV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <ToastContainer />
        <CustomNavbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
