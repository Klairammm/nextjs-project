import Navbar from "@/components/navbar/Navbar";
import style from "./styleLayout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.Layout}>
      <Navbar />
    </div>
  );
};

export default Layout;
