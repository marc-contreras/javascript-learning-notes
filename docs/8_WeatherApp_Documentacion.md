# Documentación del proyecto Weather App

## scripts/forecast.js

### `getWeather(cityKey)`
**Tipo:** Función asíncrona

**Parámetros:**
- `cityKey` (`string`): Identificador único de la ciudad proporcionado por la API de AccuWeather.

**Descripción:**
Realiza una petición HTTP a la API de AccuWeather para obtener las condiciones meteorológicas actuales de la ciudad indicada.

**Proceso:**
1. Define la URL base para las condiciones actuales.
2. Construye la URL usando `cityKey`.
3. Ejecuta `fetch()` utilizando las opciones de autenticación definidas en `options`.
4. Convierte la respuesta a JSON.
5. Devuelve el primer elemento del array recibido (`data[0]`), que contiene la información meteorológica.

**Valor devuelto:**
- Objeto con datos del tiempo actual (temperatura, descripción, icono, si es de día o de noche, etc.).

---

### `getCity(city)`
**Tipo:** Función asíncrona

**Parámetros:**
- `city` (`string`): Nombre de la ciudad introducida por el usuario.

**Descripción:**
Busca una ciudad en la API de AccuWeather y obtiene sus datos básicos.

**Proceso:**
1. Define la URL base para la búsqueda de ciudades.
2. Añade el nombre de la ciudad como parámetro de consulta.
3. Realiza la petición con `fetch()`.
4. Convierte la respuesta a JSON.
5. Devuelve el primer resultado encontrado.

**Valor devuelto:**
- Objeto con información de la ciudad, incluyendo su `Key`, utilizada posteriormente para consultar el tiempo.

---

## scripts/app.js

### `updateUI(data)`
**Tipo:** Función flecha

**Parámetros:**
- `data` (`Object`): Objeto que contiene:
  - `cityDets`: Información de la ciudad.
  - `weather`: Información meteorológica actual.

**Descripción:**
Actualiza todos los elementos visuales de la aplicación con la información recibida.

**Responsabilidades:**
1. Desestructura el objeto recibido:
   ```javascript
   const { cityDets, weather } = data;
   ```

2. Actualiza la tarjeta de información:
   - Nombre de la ciudad.
   - Descripción meteorológica.
   - Temperatura en grados Celsius.

3. Actualiza el icono meteorológico:
   ```javascript
   const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
   ```

4. Cambia la imagen principal según sea de día o de noche:
   - `img/day.svg`
   - `img/night.svg`

5. Muestra la tarjeta eliminando la clase `d-none` si estaba oculta.

**No devuelve ningún valor.**

---

### `updateCity(city)`
**Tipo:** Función asíncrona

**Parámetros:**
- `city` (`string`): Nombre de la ciudad introducida por el usuario.

**Descripción:**
Coordina las llamadas a la API necesarias para obtener toda la información requerida por la interfaz.

**Proceso:**
1. Obtiene los datos de la ciudad mediante `getCity(city)`.
2. Extrae la clave única (`Key`) de la ciudad.
3. Obtiene la información meteorológica mediante `getWeather(cityDets.Key)`.
4. Agrupa ambos resultados en un único objeto.

**Valor devuelto:**
```javascript
{
    cityDets,
    weather
}
```

---

### Evento `submit` del formulario

**Descripción:**
Gestiona la búsqueda realizada por el usuario.

**Proceso:**
1. Cancela el comportamiento por defecto del formulario:
   ```javascript
   e.preventDefault();
   ```

2. Obtiene el nombre de la ciudad introducida y elimina espacios innecesarios:
   ```javascript
   const city = cityForm.city.value.trim();
   ```

3. Limpia el formulario:
   ```javascript
   cityForm.reset();
   ```

4. Solicita la actualización de los datos:
   ```javascript
   updateCity(city)
   ```

5. Si la petición es correcta, actualiza la interfaz:
   ```javascript
   .then(data => updateUI(data))
   ```

6. Si ocurre un error, lo muestra en consola:
   ```javascript
   .catch(err => console.log(err))
   ```

---

## Flujo general de la aplicación

1. El usuario introduce una ciudad.
2. El formulario dispara el evento `submit`.
3. `updateCity()` busca la ciudad y obtiene su clave.
4. `getWeather()` utiliza esa clave para recuperar el tiempo actual.
5. `updateUI()` actualiza la interfaz con la información obtenida.
