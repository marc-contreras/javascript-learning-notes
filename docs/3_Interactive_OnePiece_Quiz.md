# Resumen del Proyecto: One Piece Quiz

## Descripción General

Este proyecto consiste en una aplicación web sencilla que implementa un **quiz interactivo sobre One Piece**. El usuario responde a una serie de preguntas de opción múltiple y, al enviar el formulario, obtiene una puntuación basada en sus respuestas correctas.

El proyecto está desarrollado utilizando:

- **HTML5** para la estructura de la página.
- **Bootstrap 5** para el diseño y los estilos visuales.
- **JavaScript** para la lógica del cuestionario y la interacción con el usuario.

---

## Estructura del Proyecto

### `index.html`

Este archivo contiene la interfaz de usuario del cuestionario.

### 1. Encabezado

Muestra el título principal de la aplicación:

```html
<h2 class="text-primary display-3 my-4">One Piece Quiz</h2>
```

### 2. Sección de resultados

Inicialmente está oculta mediante la clase de Bootstrap `d-none`.

```html
<div class="result py-4 d-none bg-light text-center">
```

Su función es mostrar el porcentaje obtenido por el usuario después de completar el quiz.

### 3. Formulario del Quiz

Contiene **cinco preguntas** relacionadas con el universo de One Piece.

Características:

- Cada pregunta utiliza botones de tipo `radio`.
- Las respuestas están agrupadas mediante atributos `name` (`q1`, `q2`, etc.).
- Cada opción tiene un valor (`A`, `B`, `C`, `D`) utilizado posteriormente para validar las respuestas.

Ejemplo:

```html
<input type="radio" name="q1" value="A">
```

### 4. Dependencias externas

El proyecto utiliza Bootstrap mediante CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
```

Además, carga el archivo JavaScript principal:

```html
<script src="scripts/app.js"></script>
```

---

## Lógica JavaScript (`app.js`)

Este archivo controla toda la funcionalidad del cuestionario.

### 1. Definición de respuestas correctas

```javascript
const correctAnswers = ['D', 'B', 'B', 'D', 'C'];
```

Se almacena un array con las respuestas correctas correspondientes a cada pregunta.

### 2. Selección de elementos del DOM

```javascript
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
```

Se obtienen referencias al formulario y a la sección donde se mostrarán los resultados.

### 3. Captura del evento `submit`

```javascript
form.addEventListener('submit', e => {
    e.preventDefault();
});
```

Se evita que el formulario recargue la página al enviarse, permitiendo procesar las respuestas mediante JavaScript.

### 4. Obtención de respuestas del usuario

```javascript
const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value
];
```

Se recopilan las opciones seleccionadas por el usuario.

### 5. Cálculo de la puntuación

```javascript
userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
        score += 20;
    }
});
```

Funcionamiento:

- Se comparan las respuestas del usuario con las correctas.
- Cada respuesta correcta suma **20 puntos**.
- La puntuación máxima es **100%**.

### 6. Mostrar el resultado

```javascript
result.classList.remove('d-none');
```

Se elimina la clase que ocultaba la sección de resultados.

Además:

```javascript
scrollTo(0, 0);
```

La página se desplaza automáticamente hacia arriba para que el usuario vea inmediatamente su puntuación.

### 7. Animación del porcentaje

En lugar de mostrar el resultado directamente, se implementa una animación:

```javascript
let output = 0;

const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;

    if (output === score) {
        clearInterval(timer);
    } else {
        output++;
    }
}, 10);
```

Características:

- Comienza desde `0%`.
- Incrementa el porcentaje cada 10 milisegundos.
- Se detiene cuando alcanza la puntuación final.

Esto mejora la experiencia visual del usuario.

---

## Conceptos de JavaScript utilizados

Durante el desarrollo se aplican varios conceptos importantes:

- Manipulación del DOM (`querySelector`).
- Gestión de eventos (`addEventListener`).
- Prevención del comportamiento por defecto (`preventDefault`).
- Arrays y métodos iterativos (`forEach`).
- Comparación de datos.
- Temporizadores (`setInterval` y `clearInterval`).
- Manipulación dinámica de clases CSS (`classList.remove`).

---

## Posibles mejoras

- Corregir el uso de `checked` en todos los botones `radio`, ya que actualmente todas las opciones aparecen seleccionadas por defecto.
- Generar las preguntas dinámicamente desde un array de objetos.
- Mostrar qué preguntas fueron incorrectas.
- Añadir almacenamiento de puntuaciones usando `localStorage`.
- Implementar un sistema de reinicio del cuestionario.
- Mejorar la accesibilidad del formulario.

---

## Conclusión

Este proyecto es un buen ejemplo de una aplicación web básica para practicar conceptos fundamentales de JavaScript y manipulación del DOM. Combina una interfaz sencilla creada con Bootstrap con lógica de validación y animaciones que mejoran la interacción del usuario.

Es especialmente útil para aprender:

- Formularios HTML.
- Eventos en JavaScript.
- Actualización dinámica del contenido de una página web.
- Uso de temporizadores para crear efectos visuales simples.
- Organización básica de proyectos frontend.