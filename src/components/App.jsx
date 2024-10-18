import React, { useState, useEffect } from "react";
import InfoScreen from "./InfoScreen";
import ResultScreen from "./ResultScreen";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [bmiResult, setBmiResult] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowInfo(true);
    }, 3000);
  }, []);

  function handleDataSubmit(data) {
    setUserData(data);
    calculateBMI(data);
  }

  function calculateBMI(data) {
    const heightInMeters = data.height / 100;
    const BmiValue = (data.weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmiResult({
      BmiValue,
      message: getBmiCategory(BmiValue),
      gender: data.gender,
      age: data.age,
    });
    setShowInfo(false);
  }

  function getBmiCategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  return (
    <div>
      {loading && <LoadingScreen />}
      {showInfo && <InfoScreen onSubmit={handleDataSubmit} />}
      {bmiResult && <ResultScreen bmi={bmiResult} />}
    </div>
  );
}

export default App;
