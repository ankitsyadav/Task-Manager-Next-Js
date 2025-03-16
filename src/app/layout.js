import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import UserContext from "@/context/userContext";
import UserProvider from "@/context/userProvider";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Task Manager",
  description: "powered by ANKIT SINGH YADAV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <UserProvider>
          <ToastContainer />
          <CustomNavbar />
          <div>{children}</div>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
