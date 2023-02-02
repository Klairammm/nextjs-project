import style from "../../styles/styleJoin.module.scss";
import Spline from "@splinetool/react-spline";

export default function Join() {
  return (
    <div className={style.Join}>
      <h3>Use left mouse button</h3>
      <Spline scene="https://prod.spline.design/PHvYNVzxDCeX6tBR/scene.splinecode" />
      <div className={style.container}></div>
    </div>
  );
}
