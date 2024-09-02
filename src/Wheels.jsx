import React, { useState } from 'react';

const WheelCalculator = () => {
  const [totalWheels, setTotalWheels] = useState(540); // Initial total wheels

  // Calculate number of 2-wheelers and 4-wheelers
  const calculateVehicles = () => {
    const numFourWheelers = Math.floor(totalWheels / 4);
    const numTwoWheelers = Math.floor((totalWheels - (numFourWheelers * 4))/2);
    return { numTwoWheelers, numFourWheelers };
  }

  const { numTwoWheelers, numFourWheelers } = calculateVehicles();

  return (
    <div>
      <h2>Vehicle Wheel Calculator</h2>
      <p>Total number of wheels: {totalWheels}</p>
      <p>Number of 2-wheeler vehicles: {numTwoWheelers}</p>
      <p>Number of 4-wheeler vehicles: {numFourWheelers}</p>
    </div>
  );
}

export default WheelCalculator;
