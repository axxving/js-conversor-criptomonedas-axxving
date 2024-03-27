// Función para convertir de Peso Mexicano a Bitcoin, Ethereum o Litecoin
function convertMXNToCrypto(value, cryptocurrency) {
    switch (cryptocurrency) {
      case 1:
        // Supongamos que 1 Peso Mexicano equivale a 0.000001 Bitcoin
        return value * 0.000001;
      case 2:
        // Supongamos que 1 Peso Mexicano equivale a 0.00002 Ethereum
        return value * 0.00002;
      case 3:
        // Supongamos que 1 Peso Mexicano equivale a 0.0002 Litecoin
        return value * 0.0002;
      default:
        return "Criptomoneda no válida. Por favor, elija entre Bitcoin (1), Ethereum (2) o Litecoin (3).";
    }
  }
  
  // Función para convertir de Real Brasileño a Bitcoin, Ethereum o Litecoin
  function convertBRLToCrypto(value, cryptocurrency) {
    switch (cryptocurrency) {
      case 1:
        // Supongamos que 1 Real Brasileño equivale a 0.0000001 Bitcoin
        return value * 0.0000001;
      case 2:
        // Supongamos que 1 Real Brasileño equivale a 0.00001 Ethereum
        return value * 0.00001;
      case 3:
        // Supongamos que 1 Real Brasileño equivale a 0.0001 Litecoin
        return value * 0.0001;
      default:
        return "Criptomoneda no válida. Por favor, elija entre Bitcoin (1), Ethereum (2) o Litecoin (3).";
    }
  }
  
  // Función para convertir de Euro a Bitcoin, Ethereum o Litecoin
  function convertEURToCrypto(value, cryptocurrency) {
    switch (cryptocurrency) {
      case 1:
        // Supongamos que 1 Euro equivale a 0.0001 Bitcoin
        return value * 0.0001;
      case 2:
        // Supongamos que 1 Euro equivale a 0.00002 Ethereum
        return value * 0.00002;
      case 3:
        // Supongamos que 1 Euro equivale a 0.0002 Litecoin
        return value * 0.0002;
      default:
        return "Criptomoneda no válida. Por favor, elija entre Bitcoin (1), Ethereum (2) o Litecoin (3).";
    }
  }
  
  // Función principal para realizar la conversión
  function convertToCrypto(value, currency, cryptocurrency) {
    switch (currency) {
      case 1:
        return convertMXNToCrypto(value, cryptocurrency);
      case 2:
        return convertBRLToCrypto(value, cryptocurrency);
      case 3:
        return convertEURToCrypto(value, cryptocurrency);
      default:
        return "Moneda no válida. Por favor, elija entre Peso Mexicano (1), Real Brasileño (2) o Euro (3).";
    }
  }
  
  // Solicitar al usuario el valor, la moneda y la criptomoneda
  let inputValue = parseFloat(prompt("Ingrese el valor a convertir:"));
  let inputCurrency = parseInt(
    prompt(
      "Ingrese el número correspondiente a la moneda desde la que desea convertir:\n1. Peso Mexicano\n2. Real Brasileño\n3. Euro"
    )
  );
  let inputCrypto = parseInt(
    prompt(
      "Ingrese el número correspondiente a la criptomoneda a la que desea convertir:\n1. Bitcoin\n2. Ethereum\n3. Litecoin"
    )
  );
  
  // Realizar la conversión y mostrar el resultado
  let result = convertToCrypto(inputValue, inputCurrency, inputCrypto);
  alert(
    `El valor ingresado de ${inputValue} pesos, es equivalente a ${result} en la criptomoneda seleccionada.`
  );
  