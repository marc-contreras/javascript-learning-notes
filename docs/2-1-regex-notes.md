# Expresiones Regulares (Regex) en JavaScript

## ¿Qué es Regex?

Una **expresión regular** (Regular Expression o Regex) es un patrón utilizado para buscar, validar o reemplazar texto.

Se usan mucho para:

* Validar formularios
* Buscar texto
* Extraer información
* Reemplazar contenido
* Verificar emails, teléfonos, contraseñas, etc.

---

# Crear una expresión regular

## Forma literal

```js
const regex = /hola/;
```

## Con el constructor RegExp

```js
const regex = new RegExp('hola');
```

---

# Métodos importantes

## test()

Devuelve `true` o `false`.

```js
const regex = /hola/;

regex.test('hola mundo'); // true
regex.test('adios'); // false
```

---

## match()

Devuelve coincidencias.

```js
const texto = 'hola mundo';
const resultado = texto.match(/hola/);

console.log(resultado);
```

---

## replace()

Reemplaza texto.

```js
const texto = 'hola mundo';

const nuevo = texto.replace(/hola/, 'adios');

console.log(nuevo);
```

---

# Caracteres especiales

## Punto `.`

Representa cualquier carácter excepto salto de línea.

```js
/h.la/
```

Coincide con:

* hola
* h1la
* h-la

---

## Barra invertida `\`

Se usa para escapar caracteres especiales.

```js
/\./
```

Busca un punto literal.

---

# Clases de caracteres

## `\d`

Número del 0 al 9.

```js
/\d/
```

---

## `\D`

Todo lo que NO sea número.

```js
/\D/
```

---

## `\w`

Caracteres alfanuméricos y `_`.

```js
/\w/
```

---

## `\W`

Todo lo que NO sea alfanumérico.

```js
/\W/
```

---

## `\s`

Espacios en blanco.

```js
/\s/
```

---

## `\S`

Todo lo que NO sea espacio.

```js
/\S/
```

---

# Rangos

## `[abc]`

Busca cualquiera de esos caracteres.

```js
/[aeiou]/
```

---

## `[a-z]`

Rango de letras minúsculas.

```js
/[a-z]/
```

---

## `[A-Z]`

Mayúsculas.

```js
/[A-Z]/
```

---

## `[0-9]`

Números.

```js
/[0-9]/
```

---

# Negación

## `[^ ]`

Niega caracteres.

```js
/[^0-9]/
```

Busca todo lo que NO sea número.

---

# Cuantificadores

## `+`

Uno o más.

```js
/\d+/
```

Coincide con:

* 1
* 25
* 999

---

## `*`

Cero o más.

```js
/\d*/
```

---

## `?`

Cero o uno.

```js
/\d?/
```

---

## `{n}`

Exactamente `n` veces.

```js
/\d{4}/
```

Exactamente 4 números.

---

## `{n,m}`

Entre `n` y `m`.

```js
/\d{4,8}/
```

Entre 4 y 8 números.

---

# Anclas

## `^`

Inicio del texto.

```js
/^hola/
```

---

## `$`

Final del texto.

```js
/mundo$/
```

---

# Flags

## `g`

Global.

```js
/hola/g
```

Busca todas las coincidencias.

---

## `i`

Ignora mayúsculas/minúsculas.

```js
/hola/i
```

---

## `m`

Multilínea.

```js
/^hola/m
```

---

# Ejemplos prácticos

---

## Validar teléfono

```js
const telefono = /^\d{11}$/;

telefono.test('12345678901'); // true
```

---

## Validar email

```js
const email = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
```

---

## Validar contraseña

Mínimo:

* 8 caracteres
* una mayúscula
* un número

```js
const password =
/^(?=.*[A-Z])(?=.*\d).{8,}$/;
```

---

# Capturing Groups

## Paréntesis `()`

Agrupan partes del patrón.

```js
const regex = /(\d{4})-(\d{2})-(\d{2})/;
```

Coincide con:

```txt
2025-05-28
```

---

# Alternación

## `|`

Equivale a OR.

```js
/(gato|perro)/
```

---

# Lookaheads

## Positive Lookahead

```js
/(?=.*\d)/
```

Debe contener un número.

---

# Eventos + Regex

Ejemplo típico con formularios:

```js
const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8,20}$/,
  email: /^[\w.-]+@[a-z\d.-]+\.[a-z]{2,}$/i
};

const form = document.querySelector('form');

form.addEventListener('keyup', e => {

  if(patterns[e.target.name].test(e.target.value)){
    e.target.className = 'valid';
  } else {
    e.target.className = 'invalid';
  }

});
```

---

# Consejos importantes

## 1. Siempre prueba tus regex

Puedes usar:

* https://regex101.com
* https://regexr.com

---

## 2. No hagas regex demasiado complejas

Es mejor dividir validaciones.

---

## 3. Usa flags correctamente

Muchos errores vienen de olvidar:

```js
/g
/i
```

---

# Resumen rápido

| Patrón | Significado        |
| ------ | ------------------ |
| `.`    | cualquier carácter |
| `\d`   | número             |
| `\w`   | letra/número/_     |
| `\s`   | espacio            |
| `+`    | uno o más          |
| `*`    | cero o más         |
| `?`    | opcional           |
| `^`    | inicio             |
| `$`    | final              |
| `[]`   | conjunto           |
| `()`   | grupo              |
| `\|`   | OR                 |

---

# Ejemplo final completo

```js
const username = 'mario123';

const pattern = /^[a-z\d]{5,12}$/;

console.log(pattern.test(username));
```

Resultado:

```txt
true
```

---
