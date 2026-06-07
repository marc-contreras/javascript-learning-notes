# Documentación de Ejercicios: Métodos de Arrays en JavaScript

## Introducción

Estos ejercicios tienen como objetivo practicar algunos de los métodos más utilizados de los arrays en JavaScript. Estos métodos permiten manipular colecciones de datos de forma más sencilla y legible, siguiendo un estilo de programación funcional.

Los métodos estudiados son:

- `filter()`
- `find()`
- `map()`
- `reduce()`
- `sort()`
- Encadenamiento de métodos (*Method Chaining*)

---

# Método `filter()`

## Objetivo

Crear un nuevo array que contenga únicamente los elementos que cumplen una determinada condición.

## Ejemplo 1: Filtrar puntuaciones mayores a 20

```javascript
const scores = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = scores.filter(score => score > 20);

console.log(filteredScores);
```

### Resultado

```javascript
[30, 25, 50, 40]
```

---

## Ejemplo 2: Filtrar usuarios premium

```javascript
const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true }
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);
```

### Resultado

```javascript
[
    { name: 'shaun', premium: true },
    { name: 'chun-li', premium: true }
]
```

### Conceptos aprendidos

- Filtrar elementos según una condición.
- Trabajar con arrays de objetos.
- Utilizar funciones flecha (*Arrow Functions*).

---

# Método `find()`

## Objetivo

Encontrar el **primer elemento** que cumpla una condición específica.

## Ejemplo: Buscar la primera puntuación superior a 50

```javascript
const scores = [10, 5, 0, 40, 60, 10];

const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);
```

### Resultado

```javascript
60
```

### Diferencia con `filter()`

| `find()` | `filter()` |
|-----------|------------|
| Devuelve un único elemento | Devuelve un array |
| Se detiene al encontrar coincidencia | Recorre todos los elementos |
| Devuelve `undefined` si no encuentra nada | Devuelve un array vacío |

### Conceptos aprendidos

- Búsqueda eficiente de elementos.
- Obtención del primer resultado válido.

---

# Método `map()`

## Objetivo

Crear un nuevo array transformando cada elemento del array original.

## Ejemplo: Aplicar descuentos a productos

```javascript
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

const saledProducts = products.map(product => {
    if (product.price > 30) {
        return {
            name: product.name,
            price: product.price / 2
        };
    }

    return product;
});

console.log(saledProducts);
```

### Resultado

```javascript
[
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 20 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 25 }
]
```

### Conceptos aprendidos

- Transformar datos sin modificar el array original.
- Crear nuevos objetos utilizando propiedades existentes.
- Aplicar condiciones dentro de `map()`.

---

# Método `reduce()`

## Objetivo

Reducir todos los elementos de un array a un único valor.

## Ejemplo: Sumar la puntuación total de Mario

```javascript
const scores = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 }
];

const marioTotal = scores.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score;
    }

    return acc;
}, 0);

console.log(marioTotal);
```

### Resultado

```javascript
120
```

### Explicación

- `acc`: acumulador.
- `curr`: elemento actual.
- `0`: valor inicial del acumulador.

### Conceptos aprendidos

- Acumular información.
- Realizar sumas y agregaciones.
- Procesar arrays de objetos.

---

# Método `sort()`

## Objetivo

Ordenar los elementos de un array.

## Ejemplo 1: Ordenar cadenas de texto

```javascript
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();

console.log(names);
```

### Resultado

```javascript
['chun-li', 'luigi', 'mario', 'shaun', 'yoshi']
```

---

## Ejemplo 2: Ordenar números

```javascript
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a, b) => a - b);

console.log(scores);
```

### Resultado

```javascript
[5, 10, 20, 35, 45, 50, 70]
```

### Explicación

- Si el resultado es negativo → `a` va antes que `b`.
- Si es positivo → `b` va antes que `a`.
- Si es `0` → mantienen su posición relativa.

---

## Ejemplo 3: Ordenar objetos por puntuación

```javascript
const players = [
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 }
];

players.sort((a, b) => b.score - a.score);

console.log(players);
```

### Resultado

```javascript
[
    { name: 'shaun', score: 70 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 }
]
```

### Conceptos aprendidos

- Ordenación ascendente y descendente.
- Ordenar arrays de objetos utilizando propiedades.

---

# Encadenamiento de Métodos (Method Chaining)

## Objetivo

Combinar varios métodos de arrays para realizar operaciones complejas de forma clara y concisa.

## Ejemplo

```javascript
const products = [
    { name: 'gold star', price: 30 },
    { name: 'green shell', price: 10 },
    { name: 'red shell', price: 40 },
    { name: 'banana skin', price: 5 },
    { name: 'mushroom', price: 50 }
];

const promos = products
    .filter(product => product.price > 20)
    .map(product => `The ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
```

### Resultado

```javascript
[
    "The gold star is 15 pounds",
    "The red shell is 20 pounds",
    "The mushroom is 25 pounds"
]
```

### Flujo de ejecución

1. `filter()` selecciona productos con precio mayor a 20.
2. `map()` transforma cada producto en un mensaje promocional.

### Ventajas

- Código más limpio y legible.
- Menor necesidad de variables intermedias.
- Facilita el procesamiento secuencial de datos.

---

# Conclusión

Estos ejercicios permiten comprender cómo utilizar los métodos más importantes de manipulación de arrays en JavaScript.

Gracias a ellos se aprende a:

- Filtrar datos (`filter()`).
- Encontrar elementos específicos (`find()`).
- Transformar información (`map()`).
- Acumular resultados (`reduce()`).
- Ordenar colecciones (`sort()`).
- Combinar operaciones mediante encadenamiento de métodos.

El dominio de estos métodos es fundamental para desarrollar aplicaciones JavaScript modernas y trabajar eficientemente con colecciones de datos.