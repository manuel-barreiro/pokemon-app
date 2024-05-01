# Pokédex - Manuel Barreiro

Este repositorio contiene una aplicación web que funciona como una Pokédex, mostrando información detallada sobre diferentes Pokémon. La aplicación original fue proporcionada como un proyecto template con áreas de mejora identificadas. En este README, se detallan las mejoras realizadas en el proyecto, así como también se explican algunas decisiones tomadas durante el proceso de desarrollo.

## Mejoras Implementadas

El objetivo principal de este proyecto fue mejorar y optimizar el template que me enviaron, siguiendo las pautas establecidas en la consigna proporcionada. Las mejoras se centraron en los siguientes aspectos:

- **Implementación de Infinite Scroll**: Se agregó la funcionalidad de cargar más tarjetas a medida que el usuario se desplaza por la lista, mejorando la eficiencia y la experiencia de usuario.

- **Lazy Loading con Skeleton Cards**: Se implementó el lazy loading para cargar cards de Pokémon de manera diferida, lo que mejora el rendimiento de la aplicación. Además, se mostraron esqueletos de carga para indicar visualmente al usuario que se están cargando datos.

    ![image](https://github.com/manuel-barreiro/pokemon-app/assets/103281038/cfa1650e-2c94-43cf-ba97-c2e7eea6e49b)


- **Rediseño de las Tarjetas y el Modal**: Se rediseñaron las tarjetas de Pokémon y el Modal para mejorar su apariencia visual y usabilidad. Se generó una paleta de colores única para cada tipo de Pokémon, lo que facilita la identificación rápida del tipo.

- **Deploy de demo del proyecto utilizando localStorage**: Para suplantar el uso de la base de datos local y las API requests, me pareció buena idea implementar localStorage como método de guardar los pokemon que vas atrapando. Esto es muy simple y tiene la ventaja de que al refrescar la página la información es consistente y no se pierde. Realicé el deploy del mismo en Vercel.

En la siguiente URL pueden visitar el proyecto y atrapar sus propios pokemon: [https://mb-pokedex.vercel.app/](https://mb-pokedex.vercel.app/)

- **Utilización de TypeScript**: Se migró el proyecto de JavaScript a TypeScript. Esto proporciona beneficios significativos en términos de mantenibilidad y detección temprana de errores durante el desarrollo, lo que ayuda a escribir un código más robusto y confiable.

- **Migración al App Router de Next.js**: Se adoptó el nuevo router de Next.js para aprovechar las últimas características y adoptar el nuevo paradigma propuesto. Esto permite una gestión más eficiente de las rutas y una mejor experiencia de desarrollo.
  
-  **Implementación de Dark Mode**: Para mejorar accesibilidad, se permite al usuario cambiar al tema que prefiera: claro u oscuro.

- **Organización del Código y Comentarios**: Se reorganizó el código para mejorar su estructura y legibilidad, por ejemplo abstrayendo la lógica a hooks. Se agregaron comentarios para explicar las diferentes partes del código y facilitar la comprensión y mantenimiento del mismo.

- **Integración de la API interna**: Se agregó funcionalidad para mostrar los Pokémon capturados por el usuario, utilizando la base de datos JSON interna.

- **Integración completa de la API de PokeAPI**: Se completó la integración con la API de PokeAPI para satisfacer todos los requisitos del enunciado original.

- **Optimización del diseño responsive**: Se realizaron ajustes para garantizar una experiencia consistente en diferentes dispositivos y tamaños de pantalla.

## Levantá el proyecto en tu computadora

### Requisitos previos

Asegurate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en tu sistema.

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu_usuario/pokedex.git](https://github.com/manuel-barreiro/pokemon-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

### Uso

Una vez que hayas clonado el repositorio e instalado las dependencias, ejecutá la aplicación localmente:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Conclusiones y features que se podrían implementar
Dado el limitado tiempo para realizar esta prueba, se me ocurrieron algunos puntos que estarían buenos implementar:
- En primer lugar, creo que estaría bueno aprovechar el SSR y renderizar todas las cards desde el servidor con una paginación.
- Esto permitiría agregar filtros para poder filtrar los pokemon segun caracteristicas, como también una barra de búsqueda.
- Agregar provider de Auth y manejo de usuarios, para una experiencia más personalizada.

## Demo

Este proyecto está licenciado bajo la [MIT License](LICENSE).

