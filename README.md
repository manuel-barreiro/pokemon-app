# Pokédex

Este repositorio contiene una aplicación web que funciona como una Pokédex, mostrando información detallada sobre diferentes Pokémon. La aplicación original fue proporcionada como un proyecto template con áreas de mejora identificadas. En este README, se detallan las mejoras realizadas en el proyecto, así como también se explican algunas decisiones tomadas durante el proceso de desarrollo.

## Objetivos

El objetivo principal de este proyecto fue mejorar y optimizar la aplicación template de la Pokédex, siguiendo las pautas establecidas en la consigna proporcionada. Las mejoras se centraron en los siguientes aspectos:

- **Limpieza y optimización del código base**: Se realizó una revisión exhaustiva del código para eliminar redundancias, mejorar la legibilidad y detectar posibles errores.

- **Accesibilidad**: Se implementaron mejoras en la accesibilidad de la aplicación para garantizar que sea usable por personas con diferentes capacidades.

- **Integración de la API interna**: Se agregó funcionalidad para mostrar los Pokémon capturados por el usuario, utilizando una API interna.

- **Integración completa de la API de PokeAPI**: Se completó la integración con la API de PokeAPI para satisfacer todos los requisitos del enunciado original.

- **Mejoras de UX/UI**: Se rediseñaron las tarjetas de los Pokémon para mejorar la experiencia del usuario. Se implementó una paleta de colores basada en el tipo de Pokémon para una mejor identificación visual.

- **Optimización del diseño responsive**: Se realizaron ajustes para garantizar una experiencia consistente en diferentes dispositivos y tamaños de pantalla.

## Mejoras Implementadas

- **Implementación de Infinite Scroll**: Se agregó la funcionalidad de cargar más tarjetas a medida que el usuario se desplaza por la lista, mejorando la eficiencia y la experiencia de usuario.

- **Lazy Loading con Skeleton Screens**: Se implementó el lazy loading para cargar imágenes de Pokémon de manera diferida, lo que mejora el rendimiento de la aplicación. Además, se mostraron esqueletos de carga para indicar visualmente al usuario que se están cargando datos.

- **Rediseño de las Tarjetas de Pokémon**: Se rediseñaron las tarjetas de Pokémon para mejorar su apariencia visual y usabilidad. Se generó una paleta de colores única para cada tipo de Pokémon, lo que facilita la identificación rápida del tipo.

- **Utilización de TypeScript**: Se migró el proyecto de JavaScript a TypeScript. Esto proporciona beneficios significativos en términos de mantenibilidad y detección temprana de errores durante el desarrollo, lo que nos ayuda a escribir un código más robusto y confiable.

- **Migración al App Router de Next.js**: Se adoptó el nuevo enrutador de Next.js para aprovechar las últimas características y adoptar el nuevo paradigma propuesto. Esto permite una gestión más eficiente de las rutas y una mejor experiencia de desarrollo.

- **Organización del Código y Comentarios**: Se reorganizó el código para mejorar su estructura y legibilidad. Se agregaron comentarios para explicar las diferentes partes del código y facilitar la comprensión y mantenimiento del mismo.

## Empezando

### Requisitos previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) en tu sistema.

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu_usuario/pokedex.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd pokedex
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

### Uso

Una vez que hayas clonado el repositorio e instalado las dependencias, puedes ejecutar la aplicación localmente:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Contribución

Las contribuciones son bienvenidas. Si tienes sugerencias, mejoras o encuentras algún error, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

---

Este README proporciona una descripción general del proyecto y las mejoras implementadas, así como también instrucciones básicas para comenzar a trabajar con la aplicación. Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto. ¡Disfruta explorando la Pokédex! 🚀
