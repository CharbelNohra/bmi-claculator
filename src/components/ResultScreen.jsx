import React from 'react';

function ResultScreen({ bmi }) {
  return (
    <div className="container result-screen">
      <h2>Your BMI Result</h2>
      <table className="result-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BMI</td>
            <td className="result-highlight">{bmi.BmiValue}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{bmi.message}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{bmi.gender}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{bmi.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultScreen;
