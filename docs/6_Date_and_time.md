# Documentación del Proyecto: Fechas y Horas en JavaScript

## Descripción General

Este proyecto tiene como objetivo aprender a trabajar con **fechas y horas en JavaScript**, utilizando tanto el objeto nativo `Date` como la biblioteca externa **date-fns**.

A través de diferentes ejemplos se exploran conceptos como:

- Creación y manipulación de fechas.
- Obtención de componentes específicos de una fecha.
- Uso de timestamps.
- Cálculo de diferencias entre fechas.
- Formateo de fechas con `date-fns`.
- Creación de un reloj digital en tiempo real.

---

# Tecnologías Utilizadas

- **HTML5**
- **JavaScript (ES6+)**
- **Date API de JavaScript**
- **date-fns CDN**

---

# Estructura del Proyecto

```text
├── index.html
├── times.js
├── timestamps.js
├── sandbox.js
└── clock.js
```

---

# Archivo `index.html`

## Objetivo

Proporcionar la estructura base para ejecutar los diferentes ejemplos relacionados con fechas y horas.

## Inclusión de date-fns

```html
<script src="https://cdn.jsdelivr.net/npm/@date-fns/cdn@4.4.0/cdn.min.js"></script>
```

### Función

Permite utilizar funciones avanzadas para trabajar con fechas.

---

## Inclusión de scripts

```html
<script src="sandbox.js"></script>
```

Dependiendo del ejercicio, puede sustituirse por:

```html
<script src="times.js"></script>
<script src="timestamps.js"></script>
<script src="clock.js"></script>
```

---

## Reloj digital

Existe un contenedor preparado para mostrar un reloj en tiempo real:

```html
<div class="clock"></div>
```

Se encuentra comentado para activarlo únicamente cuando se utilice `clock.js`.

---

# Archivo `times.js`

## Objetivo

Aprender a utilizar el objeto `Date` y obtener información específica sobre una fecha.

---

## Crear una fecha actual

```javascript
const now = new Date();
```

### Resultado

Crea un objeto que representa la fecha y hora actuales.

Ejemplo:

```javascript
Tue Jun 11 2024 19:30:15 GMT+0200
```

---

## Obtener el año

```javascript
now.getFullYear();
```

### Ejemplo

```javascript
2024
```

---

## Obtener el mes

```javascript
now.getMonth();
```

### Resultado

Devuelve un número entre:

```text
0 → Enero
11 → Diciembre
```

Ejemplo:

```javascript
5 // Junio
```

---

## Obtener el día del mes

```javascript
now.getDate();
```

Ejemplo:

```javascript
11
```

---

## Obtener el día de la semana

```javascript
now.getDay();
```

### Valores posibles

```text
0 → Domingo
1 → Lunes
...
6 → Sábado
```

---

## Obtener la hora

```javascript
now.getHours();
```

Ejemplo:

```javascript
19
```

---

## Obtener minutos

```javascript
now.getMinutes();
```

---

## Obtener segundos

```javascript
now.getSeconds();
```

---

## Obtener timestamp

```javascript
now.getTime();
```

### Definición

Devuelve el número de milisegundos transcurridos desde:

```text
1 de enero de 1970 (Unix Epoch)
```

Ejemplo:

```javascript
1718123456789
```

---

## Convertir fecha a texto

### Solo fecha

```javascript
now.toDateString();
```

Resultado:

```text
Tue Jun 11 2024
```

---

### Solo hora

```javascript
now.toTimeString();
```

Resultado:

```text
19:30:15 GMT+0200
```

---

### Fecha localizada

```javascript
now.toLocaleString();
```

Resultado:

```text
11/06/2024, 19:30:15
```

---

# Archivo `timestamps.js`

## Objetivo

Trabajar con timestamps y calcular diferencias entre fechas.

---

## Crear fechas específicas

```javascript
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
```

---

## Obtener diferencia entre fechas

```javascript
const diff = now.getTime() - before.getTime();
```

### Resultado

Devuelve la diferencia en milisegundos.

---

## Convertir milisegundos a minutos

```javascript
const mins = Math.round(diff / 1000 / 60);
```

### Conversión

```text
Milisegundos → Segundos → Minutos
```

---

## Convertir minutos a horas

```javascript
const hours = Math.round(mins / 60);
```

---

## Convertir horas a días

```javascript
const days = Math.round(hours / 24);
```

---

## Mostrar resultado

```javascript
console.log(`The blog was written ${days} days ago`);
```

Ejemplo:

```text
The blog was written 1940 days ago
```

---

## Convertir timestamp a objeto Date

```javascript
const timestamp = 1675938474990;

console.log(new Date(timestamp));
```

### Resultado

Transforma el número en una fecha legible.

Ejemplo:

```javascript
Thu Feb 09 2023 10:07:54 GMT+0100
```

---

# Archivo `sandbox.js`

## Objetivo

Aprender a utilizar la biblioteca **date-fns** para formatear y comparar fechas.

---

## Crear fecha desde timestamp

```javascript
const now = new Date(78493573469);
```

---

# Formateo de fechas

## Obtener año

```javascript
dateFns.format(now, 'yyyy');
```

Resultado:

```text
1972
```

---

## Obtener mes abreviado

```javascript
dateFns.format(now, 'MMM');
```

Resultado:

```text
Jul
```

---

## Obtener nombre del día

```javascript
dateFns.format(now, 'dddd');
```

Resultado:

```text
Thursday
```

---

## Obtener día ordinal

```javascript
dateFns.format(now, 'do');
```

Resultado:

```text
27th
```

---

## Formato personalizado

```javascript
dateFns.format(now, 'EEEE do MMM yyyy');
```

Resultado:

```text
Thursday 27th Jul 1972
```

---

# Comparación entre fechas

```javascript
const before = new Date('February 1 2019 12:00:00');

dateFns.distanceInWords(now, before);
```

### Resultado

Devuelve una descripción legible.

Ejemplo:

```text
Over 46 years
```

---

# Archivo `clock.js`

## Objetivo

Crear un reloj digital que se actualice automáticamente cada segundo.

---

## Selección del elemento HTML

```javascript
const clock = document.querySelector('.clock');
```

Obtiene el contenedor donde se mostrará la hora.

---

## Función `tick()`

```javascript
const tick = () => {

    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

};
```

### Función

Obtiene:

- Horas
- Minutos
- Segundos

actuales.

---

## Generación del HTML

```javascript
const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
`;
```

Ejemplo visual:

```text
14 : 25 : 08
```

---

## Mostrar el reloj

```javascript
clock.innerHTML = html;
```

Actualiza el contenido del contenedor.

---

## Actualización automática

```javascript
setInterval(tick, 1000);
```

### Funcionamiento

Ejecuta la función `tick()` cada:

```text
1000 ms = 1 segundo
```

---

# Métodos y Conceptos Aprendidos

## Objeto Date

```javascript
new Date()
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getTime()
```

---

## Conversión de Fechas

```javascript
toDateString()
toTimeString()
toLocaleString()
```

---

## Operaciones Matemáticas

```javascript
Math.round()
```

Utilizadas para convertir:

```text
Milisegundos → Minutos → Horas → Días
```

---

## Temporizadores

```javascript
setInterval()
```

Permiten ejecutar código repetidamente.

---

## Biblioteca date-fns

Funciones utilizadas:

```javascript
dateFns.format()
dateFns.distanceInWords()
```

Para:

- Formatear fechas.
- Comparar fechas.
- Generar textos legibles.

---

# Posibles Mejoras

- Añadir formato de reloj de 12 horas (AM/PM).
- Mostrar ceros delante de números menores que 10.
- Mostrar la fecha actual junto al reloj.
- Crear un cronómetro.
- Implementar un temporizador regresivo.
- Añadir selección de zona horaria.
- Utilizar versiones más recientes de date-fns.

---

# Conclusión

Este proyecto proporciona una introducción completa al manejo de fechas y horas en JavaScript.

A través de distintos ejercicios se aprenden conceptos esenciales como:

- Manipulación del objeto `Date`.
- Uso de timestamps.
- Cálculo de diferencias temporales.
- Formateo avanzado mediante `date-fns`.
- Creación de interfaces dinámicas utilizando temporizadores.

Estos conocimientos son fundamentales para desarrollar aplicaciones que trabajen con calendarios, eventos, registros temporales y componentes interactivos basados en tiempo.