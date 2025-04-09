// Signup.jsx
import React, { useState } from "react";
import styles from "./Signup.module.css";
import Signupimg from "../../assets/signup.png";
import Emailimg from "../../assets/email.png";
import Money from "../../assets/amount.png";
import Remaining from "../../assets/remainingdays.png";
import Cancel from "../../assets/cancel.png";
import Crediticon from "../../assets/creditsicon.png";
import Apple from "../../assets/apple.png";
import Circle1 from "../../assets/circle1.png";
import Circle2 from "../../assets/circle2.png";
import Circle3 from "../../assets/circle3.png";
import CustomizableMembership from "../../assets/customizablemembership.png";
import Fullmembership from "../../assets/fullmembership.png";
import Lockicon from "../../assets/lockicn.png";
import Reverseicon from "../../assets/reverseicon.png";
import CommitmentComponent from "../../assets/commitmentcmpnt.png";
import Noextrasteps from "../../assets/noextrastep.png";
import Arrowdownnew from "../../assets/arrowdownnew.png";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const faqData = [
    {
      id: 1,
      question: "How does my trial work?",
      description:
        "Your trial gives you full access to all platform features for a limited time period. You can explore all tools and capabilities without restrictions during this period to evaluate if the service meets your needs.",
    },
    {
      id: 2,
      question: "What does my trial include?",
      description:
        "Your trial includes unlimited access to all premium features including advanced analytics, reporting tools, automated workflows, and priority customer support. You'll have the same experience as our paying customers.",
    },
    {
      id: 3,
      question: "When does my trial start?",
      description:
        "Your trial begins immediately upon account creation and credit card verification. The countdown starts from the moment you complete the registration process, not from your first login.",
    },
    {
      id: 4,
      question: "What are class credits?",
      description:
        "Class credits are currency units used within our platform to book sessions or access premium content. Each credit allows you to participate in one class or session of your choice.",
    },
    {
      id: 5,
      question: "Why do you need my credit card information?",
      description:
        "We request your credit card information to verify your identity and to ensure a seamless transition to a paid plan if you choose to continue after your trial. You won't be charged until your trial period ends, and you'll receive a notification before any payment occurs.",
    },
    {
      id: 6,
      question: "What happens after the trial ends?",
      description:
        "After your trial period concludes, your account will automatically convert to a paid subscription using the payment method provided. You'll be charged the standard rate for the plan you selected during registration unless you cancel before the trial ends.",
    },
    {
      id: 7,
      question: "What is your cancellation policy, and how do I cancel?",
      description:
        "You can cancel your subscription at any time through your account settings. If you cancel during your trial period, you won't be charged. For paid subscriptions, cancellations take effect at the end of your current billing cycle with no partial refunds for unused time.",
    },
    {
      id: 8,
      question: "What if I run out of credits?",
      description:
        "If you exhaust all your credits, you can purchase additional credit packages from your account dashboard. These credits will be immediately available in your account and never expire. Regular subscribers also receive monthly credit refreshes.",
    },
    {
      id: 9,
      question: "What if I don't use all of my credits?",
      description:
        "Unused credits roll over to the next month for up to three billing cycles. Premium and enterprise subscribers enjoy extended rollover periods. You can also gift unused credits to other users or convert them to account discounts in some subscription plans.",
    },
  ];

  // State to track which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Toggle function to open/close questions
  const toggleQuestion = (id) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
  };
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, city });
    // Here you would normally send this data to your API
  };

  const navigate = useNavigate();

  const processSubmit = (e) => {
    e.preventDefault();
    navigate("/setup-password");
  };

  return (
    <div>
      <div className={styles.container}>
        {/* Left Side with Images */}
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Start your free trial</h2>
          <p className={styles.subtitle}>
            Search, book and try classes from top-rated studios with your free
            trial. When you create your ZoneBook account, you'll unlock
            unlimited access to over 4,000 on-demand workouts.
          </p>

          <div className={styles.imageContainer}>
            <img
              src={Signupimg}
              alt="Workout Images"
              className={styles.signupImage}
            />
          </div>
        </div>

        {/* Right Side with Form */}
        <div className={styles.rightSection}>
          <div className={styles.formContainer}>
            <div className={styles.trialBadge}>
              <p className={styles.trialBadgeText}>YOUR TRIAL INCLUDES</p>
            </div>

            <div className={styles.pricingSection}>
              <img
                src={Money}
                alt="Pricing Icon"
                className={styles.iconLarge}
              />
              <p className={styles.priceTerm}>for 14 days</p>
            </div>

            <div className={styles.benefitsList}>
              {[
                {
                  icon: Crediticon,
                  text: "Get 28 credits to book as many as 10 reservations.",
                },
                {
                  icon: Remaining,
                  text: "We'll remind you 2 days before your trial ends.",
                },
                {
                  icon: Cancel,
                  text: "You're never locked in. Cancel anytime.",
                },
              ].map((item, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.iconCircle1}>
                    <img
                      src={item.icon}
                      alt="Benefit Icon"
                      className={styles.icon1}
                    />
                  </div>
                  <p className={styles.benefitText}>{item.text}</p>
                </div>
              ))}
            </div>

            <form className={styles.form} onSubmit={processSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
              <button type="submit" className={styles.primaryButton}>
                Try for free
              </button>

              <div className={styles.orDivider}>
                <p>or</p>
              </div>

              <button type="button" className={styles.secondaryButton}>
                <img src={Apple} alt="Apple Icon" />
                Sign up with Apple
              </button>
            </form>

            <p className={styles.textMuted}>
              By getting started, you agree to our{" "}
              <a href="#" className={styles.link}>
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
              .
            </p>

            <p className={styles.textSmall}>
              After your trial, you'll auto-enroll in our $59/month plan, with
              the option of a better deal anytime. Late cancel or missed class
              fees apply.
            </p>

            <p className={styles.textSmall}>
              Offer available to new trialists only. Spa and swim appointments
              available after trial.
            </p>

            <p className={styles.textSmall}>
              I'm in Cheney, KS 67025, USA (
              <a href="#" className={styles.link}>
                Change
              </a>
              )
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <h2 className={styles.title1}>Start a risk-free trial</h2>

        <div className={styles.timelineContainer}>
          <div className={styles.reminderSection}>
            <img
              src={Emailimg}
              alt="Email reminder"
              className={styles.emailIcon}
            />
          </div>
        </div>

        <p className={styles.description}>
          Working out is hard—we're not about to make it harder. That's why
          starting with ZoneBook is free. We'll remind you 2 days before your
          trial ends so you can make changes or cancel if it's not your thing.
        </p>

        <h2 className={styles.plansTitle}>Available plans on ZoneBook</h2>

        <div className={styles.plansContainer}>
          <div className={styles.planCard}>
            <h3 className={styles.planPrice}>$19</h3>
            <p className={styles.perMonth}>per month</p>
            <p className={styles.planDescription}>
              Includes 8 credits to book up to 3 classes
            </p>
          </div>

          <div className={styles.planCard}>
            <h3 className={styles.planPrice}>$35</h3>
            <p className={styles.perMonth}>per month</p>
            <p className={styles.planDescription}>
              Includes 15 credits to book up to 5 classes
            </p>
          </div>

          <div className={styles.planCard}>
            <h3 className={styles.planPrice}>$59</h3>
            <p className={styles.perMonth}>per month</p>
            <p className={styles.planDescription}>
              Includes 28 credits to book up to 10 classes
            </p>
          </div>

          <div className={styles.planCard}>
            <h3 className={styles.planPrice}>$79</h3>
            <p className={styles.perMonth}>per month</p>
            <p className={styles.planDescription}>
              Includes 38 credits to book up to 14 classes
            </p>
          </div>

          <div className={styles.planCard}>
            <h3 className={styles.planPrice}>$199</h3>
            <p className={styles.perMonth}>per month</p>
            <p className={styles.planDescription}>
              Includes 100 credits to book up to 38 classes
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <h2 className={styles.heading2}>How ZoneBook works</h2>

        <div className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <img
              src={Circle1}
              alt="Circle with number 50"
              className={styles.circleImage}
            />
            <p className={styles.featureText}>
              With ZoneBook, you get monthly results about how many people visit
              your stores, or to know which of top spots are tops.
            </p>
          </div>

          <div className={styles.featureItem}>
            <img
              src={Circle2}
              alt="Target zones"
              className={styles.circleImage}
            />
            <p className={styles.featureText}>
              Find and target specific areas/spots with no limits and increase
              big big by products required.
            </p>
          </div>

          <div className={styles.featureItem}>
            <img src={Circle3} alt="Analytics" className={styles.circleImage} />
            <p className={styles.featureText}>
              Capture and opportunities view (crowd) spots based on potential,
              type of user, or service activation signals.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.contentSection}>
          <h2 className={styles.heading3}>
            Customizable memberships with no commitments
          </h2>

          <div className={styles.featureGroup}>
            <h3 className={styles.featureTitle}>
              Get more credits when you need
            </h3>
            <p className={styles.featureDescription}>
              Active month? Add more credits to book even more classes or
              treatments without changing your monthly plan.
            </p>
          </div>

          <div className={styles.featureGroup}>
            <h3 className={styles.featureTitle}>Roll over unused credits</h3>
            <p className={styles.featureDescription}>
              Couldn't make it to class? No sweat. Roll over up to the total
              number of credits in your upcoming plan.
            </p>
          </div>

          <div className={styles.featureGroup}>
            <h3 className={styles.featureTitle}>Change or cancel your plan</h3>
            <p className={styles.featureDescription}>
              ZoneBook never locks you in to contracts or annual commitments.
              Easily change or cancel your monthly plan.
            </p>
          </div>
        </div>

        <div className={styles.imageSection}>
          <img
            src={CustomizableMembership}
            alt="People using ZoneBook services"
            className={styles.featureImage}
          />
        </div>
      </div>
      <div className={styles.container4}>
        <div className={styles.largeImageWrapper}>
          <img
            src={Fullmembership}
            alt="Person in fitness studio"
            className={styles.largeImage}
          />
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.title}>Unlock more with a full membership</h2>

          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <img
                src={Lockicon}
                alt="Lock icon"
                className={styles.benefitIcon}
              />
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>No restrictions</h3>
                <p className={styles.benefitDescription}>
                  Every paid membership unlocks access to each fitness studio,
                  gym, sauna, & spa on our app
                </p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <img
                src={Reverseicon}
                alt="Reverse icon"
                className={styles.benefitIcon}
              />
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>Score unlimited visits</h3>
                <p className={styles.benefitDescription}>
                  Love a studio, salon, or spa? With a full-price membership,
                  visit your faves as often as you want
                </p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <img
                src={CommitmentComponent}
                alt="Calendar icon"
                className={styles.benefitIcon}
              />
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>No commitments</h3>
                <p className={styles.benefitDescription}>
                  Memberships are month-to-month and we make changing your plan
                  easy
                </p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <img
                src={Noextrasteps}
                alt="Steps icon"
                className={styles.benefitIcon}
              />
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>No extra steps</h3>
                <p className={styles.benefitDescription}>
                  Use one app to book everything, no additional sign ups, log
                  ins or check in steps required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Common questions</h2>
        <div className={styles.faqList}>
          {faqData.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <div
                className={styles.faqQuestion}
                onClick={() => toggleQuestion(faq.id)}
              >
                <span>{faq.question}</span>
                <img
                  src={Arrowdownnew}
                  alt="Toggle"
                  className={`${styles.arrowIcon} ${
                    openQuestion === faq.id ? styles.rotated : ""
                  }`}
                />
              </div>
              {openQuestion === faq.id && (
                <div className={styles.faqDescription}>{faq.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.containe5r}>
        <h2 className={styles.heading5}>Not ready to start today?</h2>
        <p className={styles.description5}>
          Get an inside look at the classes available in your neighborhood with
          our fitness city guide. By entering your email address, you agree to
          receiving ZoneBook offers, promos and other marketing by email.
        </p>
        <form className={styles.form1} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className={styles.input1}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City name"
            className={styles.input1}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <button type="submit" className={styles.button1}>
            Get your guide
          </button>
        </form>
      </div>
    </div>
  );
}
