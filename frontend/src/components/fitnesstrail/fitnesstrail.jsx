import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TrialComponent.module.css";
import image3 from "../../assets/image3.png";

const TrialComponent = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the next component/page
    navigate("/signup");
  };

  const handleSkip = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={image3}
            alt="Person doing mountain climber exercise on dock"
            className={styles.image}
          />
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.trialInfoTop}>
            <h3 className={styles.trialHeader}>What your trial includes</h3>

            <p className={styles.trialDescription}>
              You'll get free credits to try activities like yoga, pilates,
              cycling and gym visits from some of our top-rated businesses for 1
              month.
            </p>

            <p className={styles.pricingInfo}>Yep. $0.</p>
          </div>

          <div className={styles.trialInfoBottom}>
            <div className={styles.dotsWrapper}>
              <div className={styles.progressDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>

            <button className={styles.continueButton} onClick={handleContinue}>
              Continue
            </button>

            <div className={styles.skipContainer}>
              <a href="#" className={styles.skipLink} onClick={handleSkip}>
                Skip straight to sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialComponent;
