# Examen Prueba de Desarrollo Frontend - React

## Objetivo
El objetivo de este examen es evaluar tu capacidad para trabajar con React, manejar la autenticación de usuarios utilizando una API REST y gestionar el estado en una aplicación React.

## Instrucciones

### 1. Clonar el Repositorio
Clona el siguiente repositorio de GitHub: [https://dummyjson.com/docs/auth](https://dummyjson.com/docs/auth)  
Este repositorio contiene el esqueleto básico de la aplicación.

### 2. Inicializar el Proyecto
Asegúrate de tener Node.js en su versión 20 o superior instalada en tu equipo.  
Inicializa el proyecto utilizando `npm install` para instalar las dependencias necesarias.

### 3. Autenticación de un Usuario
- Implementa un formulario en React para obtener el usuario y la contraseña.
- Se requiere de validación de datos, utilizando `react-hook-form` o `Formik`.

### 4. Lógica de Autenticación
- Implementa la lógica para autenticar al usuario utilizando la API proporcionada en el repositorio.
- En caso de que las credenciales sean correctas, obtén y almacena el token de autenticación.
- Guarda el token de autenticación en el `localStorage` del navegador para mantener la sesión iniciada incluso al recargar la página.

### 5. Redirección a la Página Home
- Tras una autenticación exitosa, redirige al usuario a la página Home.

### 6. Consumir API para Obtener Información del Usuario
- Con el token almacenado, obtén la información del usuario autenticado y muestra dicha información en la página Profile de manera clara y organizada.

### 7. Extras (Opcional)
- Añade una opción para cerrar sesión, que elimine el token del estado global y del `localStorage`, y redirija al usuario a la página de login.

---

### Notas:
### Notas:
- **Uso de librerías**: He utilizado las siguientes librerías adicionales:
  - `"axios": "^1.7.4"`: Esta librería se utiliza para realizar peticiones HTTP a la API, facilitando el manejo de solicitudes y respuestas.
  - `"react-hook-form": "^7.52.2"`: Se utiliza para manejar los formularios de una manera eficiente en React, proporcionando validaciones y manejo de estado de los inputs.
  - `"zustand": "^4.5.4"`: Se utiliza para gestionar el estado global de la aplicación de una manera sencilla y ligera.

- **Estilo**: El estilo de la aplicación es flexible, pero asegúrate de que sea funcional y fácil de usar.

- **Tiempo estimado**: Se recomienda que completes esta prueba en un máximo de 4 horas.


¡Buena suerte!
