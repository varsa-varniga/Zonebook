import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Questions = () => {
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
   
   
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }} >
      <Typography variant="h5" align="left" gutterBottom sx={{color:"black"}}>
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
            <Typography variant="h7" align="left">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
  <Typography variant="body1" align="left" sx={{ fontSize: "12px" }}>
    {faq.description}
  </Typography>
</AccordionDetails>

        </Accordion>
      ))}
    </Container>
  );
};

export default Questions;
