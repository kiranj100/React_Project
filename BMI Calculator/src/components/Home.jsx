import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./home.css";

function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setWeight(value);
      setError("");
    } else {
      setError("Please enter a valid number for weight");
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setHeight(value);
      setError("");
    } else {
      setError("Please enter a valid number for height");
    }
  };

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setMessage("Please enter valid numbers for weight and height");
      setBmi(null);
      return;
    }

    if (weightNum > 0 && heightNum > 0) {
      let heightInMeters = heightNum > 2.5 ? heightNum / 100 : heightNum;
      const bmiValue = (weightNum / (heightInMeters * heightInMeters)).toFixed(
        2
      );
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      setMessage("Please enter valid weight and height");
      setBmi(null);
    }
  };

  return (
    <Box className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-white">BMI Calculator</h1>
      <div
        className="flex flex-col gap-4 items-center justify-center bg-gray-50 
     h-80 w-80 rounded-lg shadow-xl px-10"
      >
        <TextField
          required
          label="Height (cm or meters)"
          value={height}
          onChange={handleHeightChange}
          error={!!error}
        />

        <TextField
          required
          label="Weight (kg)"
          value={weight}
          onChange={handleWeightChange}
          error={!!error}
        />
        <button
          onClick={calculateBMI}
          className="bg-blue-600 rounded-xl
         hover:bg-blue-700 px-7 py-1 text-white"
        >
          Calculate
        </button>
      </div>
      {bmi && (
        <div
          className="my-5 text-2xl 
        font-medium text-center text-white"
        >
          <p>Your BMI: {bmi}</p>
          <p>{message}</p>
        </div>
      )}
      {message && !bmi && (
        <div
          className="my-5 text-2xl 
        font-medium text-center text-red-500"
        >
          <p>{message}</p>
        </div>
      )}
    </Box>
  );
}

export default Home;
