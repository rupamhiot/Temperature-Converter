function calculate() {
  event.preventDefault();
  // Get the input values
  const temperatureInput = document.getElementById('temp').value;
  const unitSelection = document.getElementById('temp_cf').value;
  //
  const cel_F =(x)=>{
   let y= ((x * 9/5) + 32);
   return y;
  }
  const F_cel =(x)=>{
    let y= (x - 32) * 5/9;
    return y;
  }
  // Perform temperature conversion
  let result=0;
  if (unitSelection === 'cel') {
    // Convert Celsius to Fahrenheit
    result = cel_F(temperatureInput);
    const resultOutput = document.getElementById('output');
    // console.log(resultOutput.value);
    // console.log(result);
    resultOutput.value=`${result.toFixed(2)} °F`;
  } else if (unitSelection === 'far') {
    // Convert Fahrenheit to Celsius
    result = F_cel(temperatureInput);
    const resultOutput = document.getElementById('output');
    resultOutput.value=`${result.toFixed(2)} °C`;
  } else {
    // Invalid unit selection
    console.log('Invalid unit selection');
    return;
  }

  // Display the result
  const resultOutput = document.getElementById('output');
  
  // resultOutput.value = result.toFixed(2); // Display the result with 2 decimal places
}
