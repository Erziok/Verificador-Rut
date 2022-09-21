# Verificador-Rut

En Chile el RUT es un identificador único el cual se le atribuye a personas o empresas para identificación tributaria. Este consta de dos partes, el número y el dígito verficiador separados por un guión.

El dígito verificador se calcula en función del número, esta operación se utiliza para evaluar la validez del RUT completo.

Se procede a tomar el número de RUT de derecha a izquierda, multiplicando cada dígito por los números que componen la serie numérica 2, 3, 4, 5, 6, y 7; y sumando el resultado de estos productos. Si se ha aplicado la serie hasta el final y quedan dígitos por multiplicar. Al número obtenido por la suma del producto de cada dígito se obtiene el valor del módulo 11, que es lo mismo que dividir por once y guardar el resto de la división entera.

Al resultado final, se le convierte a un número o a la letra K siguiendo estas reglas:

- Si el resultado es 11, el dígito verificador será 0 (cero).
- Si el resultado es 10, el dígito verificador será K.
- En otro caso, el resultado será el propio dígito verificador.

Ejemplo el RUT 5.544.332, para calcular el dígito verificador:

2 * 2 = 4  
3 * 3 = 9  
3 * 4 = 12  
4 * 5 = 20  
4 * 6 = 24  
5 * 7 = 35  
5 * 2 = 10

Suma de los productos = 4 + 9 + 12 + 20 + 24 + 35 + 10 = 114

Aplicamos el Módulo 11: 114 = 11*10 + 4. Ahora calculamos 11-4= 7.

Siguiendo las reglas mencionadas el rut completo sería 5.544.332-7
