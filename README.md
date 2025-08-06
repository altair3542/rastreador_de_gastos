# Rastreador de Gastos

Este proyecto es una aplicación de ejemplo construida con React Native y Expo.
A continuación se describe cómo ponerla en marcha.

## Requisitos previos

- Node.js y npm instalados.
- Un emulador o dispositivo físico para Android o iOS si se desea probar en móvil.
- No se requiere instalar `expo-cli` de manera global; este paquete está deprecado. Se utiliza `npx expo` para ejecutar los comandos de Expo.

## Si ya tienes el proyecto descargado

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo de Expo con:
   ```bash
   npx expo start
   ```
   Puedes añadir las opciones `--android`, `--ios` o `--web` para abrir directamente en el emulador o navegador.

## Inicializar el proyecto desde cero

Si quieres crear una nueva copia del proyecto sin usar comandos de Git, puedes inicializarlo con `create-expo-app` y luego copiar el código necesario.

1. Crea una nueva app:
   ```bash
   npx create-expo-app rastreador_de_gastos
   cd rastreador_de_gastos
   ```
2. Copia o escribe los archivos (`App.js`, `screens/`, etc.) que se muestran en este repositorio.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta la aplicación:
   ```bash
   npx expo start
   ```

## Consideraciones para Windows PowerShell

- En algunas máquinas puede haber restricciones de **Execution Policy** que impiden ejecutar scripts (`npx`, `npm`).

- Si recibes un error como _“execution of scripts is disabled on this system”_, abre PowerShell **como Administrador** y ejecuta:

  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force
  ```

## Estructura básica del proyecto

- `App.js`: punto de entrada principal que carga la pantalla `HomeScreen`.
- `screens/`: contiene los componentes de las pantallas de la aplicación.
- `package.json`: define las dependencias y scripts disponibles.

Con estos pasos deberías poder poner en marcha el proyecto o crear uno nuevo basado en él sin necesidad de utilizar comandos de Git.
