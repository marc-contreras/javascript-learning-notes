# REGEX notes
## Links used
https://regex101.com/ 

## Before to start
- Select javascript language ![regex1](/docs/img/regex1.png)
- Don't leave any flag ![regex2](/docs/img/regex2.png)

## Regular expressions

### Conjuntos de caracteres
- [gp]ato &rarr; match cuando encuentra gato o pato
- [^p]000 &rarr; match todos los carácteres exepto los que van detras de ^ en este caso match todos menos p000
- [^pe2]000 &rarr; como el ejemplo anterior, todos excepto p000, e000 y 2000
- [a-z]ato &rarr; todas las letras del abecedario
- [a-n]ato &rarr; ejemplo letras limitadas de la a a la n.
- [a-z]ato /i &rarr; match en todas las letras no case sensitive 
- [a-zA-z]ato &rarr; lo mismo que la última fila
- [0-9]ato &rarr; todos los números
- [0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9] &rarr; match con un número de 12 cifras
- [0-9]+ &rarr; 
  - [0-9]: Es un rango que coincide con cualquier carácter numérico individual.
  - +: Es un cuantificador que indica que el elemento anterior debe aparecer al menos una vez o más
