function WheelsVehicles(totalWheels) {
    if (totalWheels % 2 !== 0) {
      return "Total number of wheels must be even.";
    }
  
    let num2Wheelers = 0;
    let num4Wheelers = totalWheels / 4;
  
    while (num4Wheelers >= 0) {
      let remainingWheels = totalWheels - (num4Wheelers * 4);
  
      if (remainingWheels % 2 === 0) {
        num2Wheelers = remainingWheels / 2;
        return {
          num2Wheelers: num2Wheelers,
          num4Wheelers: num4Wheelers
        };
      }
  
      num4Wheelers--;
    }
  
    return "Cannot divide wheels into 2-wheelers and 4-wheelers.";
  }
  
  // Example usage:
  let totalWheels = 28;
  let result = divideWheels(totalWheels);
  console.log(result);
  