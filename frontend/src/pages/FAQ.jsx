import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

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

  return (
    <Container maxWidth="md" sx={{ py: 4 }} >
      <Typography variant="h4" align="center" gutterBottom sx={{color:"green"}}>
        Freqently Asked Questions
      </Typography>
      {faqData.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
          sx={{
            backgroundColor: "white",
            boxShadow: "none",
            borderBottom: "1px solid #ddd",
            "&:before": { display: "none" }, // Removes MUI default underline effect
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
