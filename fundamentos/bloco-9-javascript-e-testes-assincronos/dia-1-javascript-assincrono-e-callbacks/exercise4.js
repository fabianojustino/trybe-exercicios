const messageDelay = () => Math.floor(Math.random() * 0,6);

const getMarsTemperature = () => {
  console.log("pedido enviado");
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};


const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

  const handleError = (errorReason) => {
      console.error(`Error getting temperature: ${errorReason}`);  
    
  }

 

const sendMarsTemperature = (callback, callBackError) => {
  const temperature = getMarsTemperature();
  const hackTime = Math.random() <= 0.6;

  setTimeout(() => {    
    if(hackTime){
      callback(temperature);
    }else{
      callBackError('falhou ao enviar a msg')
    }

    
  }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
sendMarsTemperature(greet, handleError); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
