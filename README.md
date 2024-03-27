# Conversor de Criptomonedas

Este programa en JavaScript te permite convertir valores de diferentes monedas (Peso Mexicano, Real Brasileño, Euro) a criptomonedas (Bitcoin, Ethereum, Litecoin).

## Funciones de Conversión

El programa contiene tres funciones para convertir de las monedas mencionadas a las criptomonedas especificadas:

1. `convertMXNToCrypto(value, cryptocurrency)`: Convierte de Peso Mexicano a Bitcoin, Ethereum o Litecoin.
2. `convertBRLToCrypto(value, cryptocurrency)`: Convierte de Real Brasileño a Bitcoin, Ethereum o Litecoin.
3. `convertEURToCrypto(value, cryptocurrency)`: Convierte de Euro a Bitcoin, Ethereum o Litecoin.

Cada función toma dos parámetros: el valor a convertir y el número correspondiente a la criptomoneda a la que se desea convertir (1 para Bitcoin, 2 para Ethereum, 3 para Litecoin).

## Función Principal de Conversión

La función principal `convertToCrypto(value, currency, cryptocurrency)` determina la moneda de origen y llama a la función correspondiente de conversión.

## Interacción con el Usuario

El programa solicita al usuario ingresar el valor a convertir, la moneda de origen y la criptomoneda de destino mediante ventanas emergentes de diálogo (`prompt`).

## Ejemplo de Uso

1. El usuario ingresa el valor a convertir, por ejemplo, 100.
2. Luego, elige la moneda de origen entre Peso Mexicano (1), Real Brasileño (2) o Euro (3).
3. Después, selecciona la criptomoneda a la que desea convertir entre Bitcoin (1), Ethereum (2) o Litecoin (3).
4. Finalmente, el programa calcula la conversión y muestra el resultado en una ventana emergente (`alert`).

¡Disfruta convirtiendo tus monedas a criptomonedas con este programa!