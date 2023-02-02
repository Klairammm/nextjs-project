import style from "./styleHero.module.scss";
import Image from "next/image";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={style.Hero}>
      <div className={style.gallery}>
        <div className={style.gallery__title}>
          <h3>Explore gallery</h3>
        </div>
        <div className={style.container}>
          <AiFillCaretLeft />
          <div className={style.gallery__imgContainer}>
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
            <Image
              src="https://picsum.photos/1920/1000"
              alt="imgHero"
              width={600}
              height={300}
              priority={true}
            />
          </div>
          <AiFillCaretRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
