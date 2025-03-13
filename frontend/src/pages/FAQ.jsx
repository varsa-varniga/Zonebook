import { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "./Fqdata"; // Correct import

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      {selectedQuestion === null ? (
        faqData.map((item, index) => (
          <div 
            key={index} 
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            onClick={() => setSelectedQuestion(index)}
          >
            <strong>{item.question}</strong>
            {/* Expand Arrow */}
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
          </div>
        ))
      ) : (
        <div style={{ position: "relative", maxWidth: "600px", margin: "auto", paddingTop: "20px" }}>
  
          {/* Back Button Positioned at Top-Left Below Navbar */}
          <IconButton 
            onClick={() => setSelectedQuestion(null)} 
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              padding: "5px",
              zIndex: 1000,
            }}
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>
      
          <div style={{ paddingTop: "40px" }}>  
            <h2>{faqData[selectedQuestion].question}</h2>
            <p>{faqData[selectedQuestion].answer}</p>
          </div>
      
        </div>
      )}
    </div>
  );
};

export default FAQ;
