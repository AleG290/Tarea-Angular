# Tarea-Angular

Este proyecto es una aplicación en Angular que consume datos de la API pública de Pokémon y los muestra en una lista.

## **Tecnologías utilizadas**

- **Angular**: Framework de desarrollo frontend.
- **RxJS**: Librería para manejar flujos asíncronos.
- **HTTP Client**: Para hacer peticiones HTTP a la API de Pokémon.

## **Características**

- Muestra una lista de los primeros 10 Pokémon desde la [Pokémon API](https://pokeapi.co/).
- El diseño está basado en un tema inspirado en Pokémon, con tarjetas interactivas que muestran el nombre de cada Pokémon.
- El título incluye el logo de Pokémon.
- Cuenta con dos pantallas que muestra informacion adicional de cada pokemon

## **Requisitos**

- **Node.js** (versión 16 o superior)
- **npm** (gestor de paquetes de Node.js)

## **Instrucciones de ejecución**

1. **Clona el repositorio** en tu máquina local:

    ```bash
    git clone https://github.com/AleG290/Tarea-Angular
    ```

2. **Accede a la carpeta del proyecto**:

    ```bash
    cd Tarea-Angular
    ```

3. **Instala las dependencias** del proyecto:

    ```bash
    npm install
    ```

4. **Ejecuta la aplicación**:

    ```bash
    ng serve
    ```

    Esto levantará un servidor en el puerto **4200** (por defecto). Puedes acceder a la aplicación abriendo tu navegador y visitando:

    ```url
    http://localhost:4200
    ```

## **Descripción del código**

- **app.component.ts**: Este archivo contiene la lógica para hacer la petición HTTP a la Pokémon API y mostrar los resultados en la vista.
- **app.component.html**: Es el archivo donde se define el HTML que presenta la lista de Pokémon y el título con el logo.
- **styles.css**: Estilos globales que se aplican a toda la aplicación.

## **Dependencias**

El proyecto utiliza las siguientes dependencias de Angular:

- `@angular/core`
- `@angular/common`
- `@angular/http`
- `rxjs`
