import { Link } from "react-router-dom";
import { styles } from "../styles";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow mb-10 md:mb-20 lg:mb-20`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Let’s try our <span className="text-gradient">SERVICE</span> now!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to make website and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link
        to="/services"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Button title="Get Started"/>
      </Link>
    </div>
  </section>
);

export default CTA;
