import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Button,
  Container,
  InputAdornment,
  TextField,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";

const ZoneBookSetupWizard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  // State for each step
  const [genre, setGenre] = useState("");
  const [size, setSize] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [service, setService] = useState("");
  const [capacity, setCapacity] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [pricing, setPricing] = useState({
    currency: "",
    amount: "",
  });
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    marketingConsent: false,
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryData = data
          .map((country) => ({
            name: country.name.common,
            flag: country.flags.png,
            destinations: Math.floor(Math.random() * 200) + 10, // Random destinations (10-200)
          }))
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

        setCountries(countryData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, []);

  // Navigation handlers
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Change handlers
  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };
  const handlePricingCurrencyChange = (event) => {
    setPricing((prev) => ({
      ...prev,
      currency: event.target.value,
    }));
  };

  const handlePricingAmountChange = (event) => {
    setPricing((prev) => ({
      ...prev,
      amount: event.target.value,
    }));
  };

  const handleFirstNameChange = (event) => {
    setContactInfo((prev) => ({
      ...prev,
      firstName: event.target.value,
    }));
  };

  const handleLastNameChange = (event) => {
    setContactInfo((prev) => ({
      ...prev,
      lastName: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    setContactInfo((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handleMarketingConsentChange = (event) => {
    setContactInfo((prev) => ({
      ...prev,
      marketingConsent: event.target.checked,
    }));
  };

  const handleCalculateRevenue = () => {
    navigate("/additionalearning");
  };

  // Country data

  // Size options
  const sizeOptions = ["1", "2 - 4", "5 - 7", "7 - 10", "10 - 15", "15+"];

  // Capacity options
  const capacityOptions = [
    "1 - 5",
    "6 - 10",
    "11 - 15",
    "16 - 20",
    "21 - 25",
    "25+",
  ];
  const currencyOptions = ["AUD", "GBP", "EUR", "USD", "AED", "INR"];

  // Step definitions
  const steps = [
    {
      id: 0,
      title: "Where is your business located?",
      subtitle:
        "ZoneBook is available in thousands of cities around the globe.",
      content: loading ? (
        <CircularProgress sx={{ mt: 2 }} />
      ) : (
        <FormControl
          sx={{
            width: "300px",
            backgroundColor: "#fff",
            textAlign: "left",
          }}
          variant="outlined"
        >
          <InputLabel
            shrink={!!selectedCountry}
            sx={{
              transform: selectedCountry
                ? "translate(14px, -8px) scale(0.9)"
                : "translate(14px, 14px) scale(1)",
              transition: "all 0.2s ease-in-out",
              backgroundColor: "#fff",
              px: 1,
            }}
          >
            Country
          </InputLabel>
          <Select
            value={selectedCountry}
            onChange={handleCountryChange}
            displayEmpty
            renderValue={(selected) => {
              if (!selected)
                return <span style={{ color: "#aaa" }}>Country</span>;
              const selectedObj = countries.find((c) => c.name === selected);
              return (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={selectedObj?.flag}
                      alt={selected}
                      width={20}
                      style={{ marginRight: 10 }}
                    />
                    {selected}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#777",
                      fontSize: "12px",
                      marginLeft: "30px",
                    }}
                  >
                    {selectedObj?.destinations} Destinations
                  </Typography>
                </Box>
              );
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 200,
                  width: "300px",
                },
              },
            }}
            sx={{
              "& .MuiSelect-select": {
                paddingTop: "12px",
                paddingBottom: "12px",
              },
            }}
          >
            {countries.map((c) => (
              <MenuItem
                key={c.name}
                value={c.name}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={c.flag}
                    alt={c.name}
                    width={20}
                    style={{ marginRight: 10 }}
                  />
                  {c.name}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#777",
                    fontSize: "12px",
                    marginLeft: "30px",
                  }}
                >
                  {c.destinations} Destinations
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      id: 1,
      title: "How many locations do you have?",
      subtitle:
        "Whether you have one location or dozens, ZoneBook works with businesses of all sizes.",
      content: (
        <FormControl
          sx={{
            minWidth: 300,
            backgroundColor: "#fff",
            textAlign: "left",
            position: "relative",
          }}
          variant="outlined"
        >
          <InputLabel
            shrink={false}
            sx={{
              position: "absolute",
              left: 15,
              top: size || isFocused ? -8 : "50%",
              transform:
                size || isFocused
                  ? "translateY(0%) scale(0.8)"
                  : "translateY(-50%) scale(1)",
              transition: "0.3s ease-in-out",
              backgroundColor: "#fff",
              padding: "0 5px",
              fontSize: size || isFocused ? "12px" : "16px",
              color: "#666",
            }}
          >
            No. of locations
          </InputLabel>
          <Select
            value={size}
            onChange={handleSizeChange}
            onOpen={() => setIsFocused(true)}
            onClose={() => setIsFocused(false)}
            displayEmpty
            sx={{
              height: 50,
              fontSize: 16,
              paddingLeft: 2,
              "& .MuiSelect-select": {
                paddingLeft: "10px",
              },
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            <MenuItem disabled value="">
              <em>No. of locations</em>
            </MenuItem>
            {sizeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      id: 2,
      title: "Select your primary activity genre",
      subtitle: "Select your activity genre:",
      content: (
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Activity genre</InputLabel>
          <Select
            value={genre}
            onChange={handleGenreChange}
            label="Activity genre"
            sx={{
              height: 50,
              fontSize: 16,
              backgroundColor: "#fff",
            }}
          >
            <MenuItem value="Dance">Dance</MenuItem>
            <MenuItem value="Gym">Gym</MenuItem>
            <MenuItem value="Boxing">Boxing</MenuItem>
            <MenuItem value="Yoga">Yoga</MenuItem>
            <MenuItem value="Cycling">Cycling</MenuItem>
            <MenuItem value="Running">Running</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      id: 3,
      title: "What are your primary services?",
      subtitle:
        "We'll pay you for every spot that members book through ZoneBook, so you can generate even more revenue.",
      content: (
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Services</InputLabel>
          <Select
            value={service}
            onChange={handleServiceChange}
            label="Services"
            sx={{
              height: 50,
              fontSize: 16,
              backgroundColor: "#fff",
            }}
          >
            <MenuItem value="Beauty">Beauty</MenuItem>
            <MenuItem value="Hair">Hair</MenuItem>
            <MenuItem value="Acupuncture">Acupuncture</MenuItem>
            <MenuItem value="Facial">Facial</MenuItem>
            <MenuItem value="Sauna">Sauna</MenuItem>
            <MenuItem value="Nails">Nails</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      id: 4,
      title: "What is your class or gym capacity?",
      subtitle:
        "ZoneBook uses SmartSpot to help you fill spots you're less likely to fill on your own, while protecting your direct clientele.",
      content: (
        <FormControl
          sx={{
            minWidth: 300,
            backgroundColor: "#fff",
            textAlign: "left",
            position: "relative",
          }}
          variant="outlined"
        >
          <InputLabel
            sx={{
              position: "absolute",
              left: 15,
              top: isFocused || capacity ? 5 : "50%",
              transform:
                isFocused || capacity
                  ? "translateY(-50%) scale(1)"
                  : "translateY(-50%) scale(1.2)",
              transition: "0.3s ease-in-out",
              backgroundColor: "#fff",
              padding: "0 5px",
              fontSize: isFocused || capacity ? "12px" : "16px",
              color: isFocused ? "#1976d2" : "#000",
              fontWeight: "bold",
            }}
          >
            Capacity
          </InputLabel>
          <Select
            value={capacity}
            onChange={handleCapacityChange}
            onOpen={() => setIsFocused(true)}
            onClose={() => setIsFocused(false)}
            sx={{
              height: 50,
              fontSize: 16,
              paddingLeft: 2,
              "& .MuiSelect-select": {
                paddingLeft: "10px",
              },
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }}
          >
            {capacityOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ),
    },
    {
      id: 5,
      title: "On average, how much do you charge per spot?",
      subtitle:
        "When you work with ZoneBook, you get access to SmartPlus - a tool that helps you maximize your earnings by dynamically pricing your spots, based on demand.",
      content: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <FormControl
            variant="outlined"
            sx={{
              minWidth: 300,
              mb: 2,
            }}
          >
            <InputLabel>Currency</InputLabel>
            <Select
              value={pricing.currency}
              onChange={handlePricingCurrencyChange}
              label="Currency"
              sx={{
                height: 50,
                fontSize: 16,
                backgroundColor: "#fff",
              }}
            >
              {currencyOptions.map((currency) => (
                <MenuItem key={currency} value={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            label="Amount Charged"
            type="number"
            value={pricing.amount}
            onChange={handlePricingAmountChange}
            sx={{
              minWidth: 300,
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            InputProps={{
              startAdornment: pricing.currency ? (
                <Typography sx={{ mr: 1 }}>{pricing.currency}</Typography>
              ) : null,
            }}
          />
        </Box>
      ),
    },

    {
      id: 6,
      title: "One last thing",
      subtitle:
        "Complete the form below to see your expected revenue and get more information about our partnership opportunities.",
      content: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            value={contactInfo.firstName}
            onChange={handleFirstNameChange}
            sx={{
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            value={contactInfo.lastName}
            onChange={handleLastNameChange}
            sx={{
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            value={contactInfo.email}
            onChange={handleEmailChange}
            sx={{
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={contactInfo.marketingConsent}
                onChange={handleMarketingConsentChange}
                color="primary"
              />
            }
            label={
              <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                I agree to receive marketing and other communications from
                ZoneBook, MindBody, and their affiliates. You can unsubscribe
                from these communications at any time. ZoneBook processes your
                personal information in accordance with our Privacy Policy.
              </Typography>
            }
            sx={{
              alignItems: "flex-start",
              mt: 1,
              width: "100%",
            }}
          />
          <Button
            variant="contained"
            onClick={handleCalculateRevenue}
            sx={{
              mt: 2,
              backgroundColor: "#4d6241",
              color: "white",
              "&:hover": {
                backgroundColor: "#3d5133",
              },
              width: "100%",
              height: 50,
            }}
          >
            Calculate my revenue
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#fff" }}>
      {/* Navigation Bar */}

      {/* Main Content - Positioned higher in the viewport */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Changed to center
          alignItems: "center",
          textAlign: "center",
          position: "relative", // Added for absolute positioning of arrows
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {steps[currentStep].title}
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            mt: 3,
            mb: 5, // Increased bottom margin for more space between title and content
            maxWidth: "800px", // Added max width for better readability
            width: "100%",
          }}
        >
          {steps[currentStep].subtitle}
        </Typography>

        {/* Step Content */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px", // Increased max width
            display: "flex",
            justifyContent: "center",
          }}
        >
          {steps[currentStep].content}
        </Box>

        {/* Navigation Arrows - Positioned higher */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%", // Changed to top 50%
            transform: "translateY(-50%)", // Center vertically
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10%",
            boxSizing: "border-box",
            zIndex: 10, // Ensure arrows are above other content
          }}
        >
          <IconButton
            onClick={handleBack}
            disabled={currentStep === 0}
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "2px solid #4d6241",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: 30, color: "#4d6241" }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={currentStep === 6} // Changed to disable only on last step
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              border: "2px solid #4d6241",
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 30, color: "#4d6241" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ZoneBookSetupWizard;
