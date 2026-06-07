# Documentación del Proyecto: To Do List

## Descripción General

Este proyecto consiste en una aplicación web sencilla de gestión de tareas (**To Do List**) desarrollada con **HTML**, **CSS**, **Bootstrap** y **JavaScript**.

La aplicación permite a los usuarios:

- Visualizar una lista de tareas.
- Añadir nuevas tareas.
- Eliminar tareas existentes.
- Filtrar tareas mediante un buscador en tiempo real.

El objetivo principal del proyecto es practicar la manipulación del DOM, la gestión de eventos y el uso de métodos de arrays en JavaScript.

---

# Tecnologías Utilizadas

- **HTML5** → Estructura de la aplicación.
- **CSS3** → Personalización de estilos.
- **Bootstrap 5** → Diseño responsivo y componentes visuales.
- **Font Awesome** → Iconos para eliminar tareas.
- **JavaScript (ES6+)** → Lógica e interactividad.

---

# Estructura del Proyecto

```text
├── index.html
├── style.css
└── app.js
```

---

# Archivo `index.html`

## Objetivo

Define la estructura visual de la aplicación.

## Componentes principales

### Encabezado

```html
<header class="text-center text-light my-4">
    <h1 class="mb-4">To Do List</h1>

    <form class="search">
        <input
            type="text"
            class="form-control m-auto"
            name="search">
    </form>
</header>
```

Incluye:

- Título principal.
- Campo de búsqueda para filtrar tareas.

---

## Lista de tareas

```html
<ul class="list-group todos mx-auto text-light">
```

Contiene las tareas almacenadas.

Cada tarea está formada por:

```html
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>play mariokart</span>
    <i class="far fa-trash-alt delete"></i>
</li>
```

Elementos:

- `<span>` → texto de la tarea.
- `<i>` → icono de papelera para eliminarla.

---

## Formulario para añadir tareas

```html
<form class="add text-center my-4">
    <label class="text-light">
        Add a new todo...
    </label>

    <input
        type="text"
        class="form-control m-auto"
        name="add">
</form>
```

Permite introducir nuevas tareas.

---

# Archivo `style.css`

## Objetivo

Personalizar la apariencia visual de la aplicación.

---

## Fondo de la página

```css
body {
    background-color: #34325c;
}
```

Se establece un fondo oscuro.

---

## Tamaño máximo del contenedor

```css
.container {
    max-width: 400px;
}
```

Limita el ancho para mantener una interfaz compacta.

---

## Estilos de los campos de texto

```css
input[type=text],
input[type=text]:focus {
    color: #fff;
    border: none;
    background: rgba(0,0,0,0.2);
    max-width: 400px;
}
```

Características:

- Texto blanco.
- Fondo semitransparente.
- Eliminación del borde por defecto.

---

## Estilos de las tareas

```css
.todos li {
    color: white;
    background-color: #423e71;
    border: none;
    margin: 1px;
}
```

Cada tarea aparece con:

- Texto blanco.
- Fondo morado oscuro.
- Separación mínima entre elementos.

---

## Cursor sobre el icono de eliminación

```css
.delete {
    cursor: pointer;
}
```

Indica visualmente que el icono es interactivo.

---

## Clase para ocultar tareas filtradas

```css
.filtered {
    display: none !important;
}
```

Se utiliza durante el proceso de búsqueda.

---

# Archivo `app.js`

## Objetivo

Gestionar toda la lógica de la aplicación.

---

# Selección de elementos del DOM

```javascript
const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');
```

Se almacenan referencias a:

- Formulario de creación de tareas.
- Lista de tareas.
- Campo de búsqueda.

---

# Generación dinámica de tareas

## Función `generateTemplate`

```javascript
const generateTemplate = (todo) => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    ul.innerHTML += html;
};
```

### Función

Genera el código HTML necesario para mostrar una nueva tarea en la lista.

### Parámetro

| Parámetro | Descripción |
|-----------|-------------|
| `todo` | Texto de la tarea |

---

# Añadir nuevas tareas

## Evento `submit`

```javascript
addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
    }

    addForm.reset();
});
```

## Funcionamiento

### 1. Evita la recarga de la página

```javascript
e.preventDefault();
```

---

### 2. Obtiene el texto introducido

```javascript
const todo = addForm.add.value.trim();
```

`trim()` elimina espacios al principio y al final.

---

### 3. Verifica que no esté vacío

```javascript
if(todo.length)
```

Solo se añaden tareas válidas.

---

### 4. Añade la nueva tarea

```javascript
generateTemplate(todo);
```

---

### 5. Limpia el formulario

```javascript
addForm.reset();
```

---

# Eliminar tareas

## Delegación de eventos

```javascript
ul.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

});
```

## Funcionamiento

Cuando se hace clic sobre el icono de papelera:

```javascript
e.target.classList.contains('delete')
```

Se elimina el elemento padre:

```javascript
e.target.parentElement.remove();
```

---

## Ventajas de la delegación de eventos

- Funciona con elementos creados dinámicamente.
- Reduce el número de listeners necesarios.
- Mejora el rendimiento.

---

# Filtrado de tareas

## Función `filterTodos`

```javascript
const filterTodos = (term) => {

    Array.from(ul.children)

        .filter(todo =>
            !todo.textContent
                .toLowerCase()
                .includes(term)
        )

        .forEach(todo =>
            todo.classList.add('filtered')
        );

    Array.from(ul.children)

        .filter(todo =>
            todo.textContent
                .toLowerCase()
                .includes(term)
        )

        .forEach(todo =>
            todo.classList.remove('filtered')
        );
};
```

---

## Funcionamiento

### Convertir elementos HTML a array

```javascript
Array.from(ul.children)
```

Permite utilizar métodos como:

- `filter()`
- `forEach()`

---

### Ocultar tareas que no coinciden

```javascript
todo.classList.add('filtered');
```

---

### Mostrar tareas coincidentes

```javascript
todo.classList.remove('filtered');
```

---

# Búsqueda en tiempo real

## Evento `keyup`

```javascript
search.addEventListener('keyup', () => {

    const term = search.value
        .trim()
        .toLowerCase();

    filterTodos(term);

});
```

## Funcionamiento

Cada vez que el usuario escribe:

1. Obtiene el texto del buscador.
2. Elimina espacios innecesarios.
3. Convierte el texto a minúsculas.
4. Ejecuta el filtrado.

---

# Métodos de JavaScript utilizados

## Manipulación del DOM

```javascript
querySelector()
parentElement
classList
innerHTML
remove()
```

---

## Gestión de eventos

```javascript
addEventListener()
preventDefault()
```

Eventos utilizados:

- `submit`
- `click`
- `keyup`

---

## Métodos de Arrays

```javascript
Array.from()
filter()
forEach()
includes()
```

---

# Posibles Mejoras

- Guardar tareas en `localStorage`.
- Marcar tareas como completadas.
- Añadir fechas límite.
- Implementar edición de tareas.
- Confirmación antes de eliminar.
- Añadir animaciones al agregar o eliminar elementos.
- Permitir filtrar por estado (completadas o pendientes).

---

# Conclusión

Este proyecto es una excelente práctica para aprender conceptos fundamentales de JavaScript relacionados con la manipulación del DOM y la interacción del usuario.

Durante su desarrollo se trabajan habilidades como:

- Creación dinámica de elementos HTML.
- Gestión de formularios.
- Delegación de eventos.
- Filtrado de información en tiempo real.
- Manipulación de clases CSS mediante JavaScript.

La aplicación constituye una base sólida para desarrollar gestores de tareas más avanzados incorporando persistencia de datos y funcionalidades adicionales.