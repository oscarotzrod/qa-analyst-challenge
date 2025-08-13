# QA Challenge
## Node.js — Pruebas de API REST + Integración

- Instalar Jest vía npm o yarn.

### Objetivo

Escribir pruebas unitarias y de integración con Jest en la carpeta `/test` para validar los siguientes endpoints y funcionalidades:

1. **GET /users/:id**  
   - Validar cuando el usuario existe.  
   - Validar cuando el usuario no es encontrado (debe responder 404).

2. **DELETE /users/:id**  
   - Validar que la acción de borrado sea un *soft delete* (no eliminación física).

3. **POST /users**  
   - Crear un usuario con validación de datos.  
   - Validar que los campos **nombre**, **email** y **rfc** tengan el formato adecuado.

### Extras

- Implementar las validaciones necesarias para los campos:  
  - Nombre  
  - Email  
  - RFC (con formato mexicano correcto)

- Implementar la lógica para simular un *soft delete* al borrar usuarios.


##  CI/CD
En el archivo requirements.txt, escriba que pasos ejecutaría para implementar un proceso de CI/CD y que consideraciones a tener

##  E2E

Hacer un proceso de E2E para la acción del login en el siguiente portal

a. Validar/Automatizar el proceso de login:

- Ir a la página de login del portal.
- Ingresar usuario y contraseña.
- Validar que se redirige al dashboard (por ejemplo, https://pas.personicore.com/dashboards).

b. Validar elementos post-login:

- Confirmar que el dashboard carga correctamente (por ejemplo, que aparece el texto “Bienvenido” o un elemento único).
- Validar que el nombre de usuario se muestra en la interfaz.

c. Realizar navegación y acción clave:

- Ir al menú de Viewership > Households.
- Seleccionar una opción específica (por ejemplo, "Add +").
- Validar que se carga una tabla o sección esperada.

d. Capturar errores o comportamientos inesperados.

- Si algún paso falla (mensaje de error, pantalla en blanco, etc.), debe documentarlo.
- Tomar screenshots en puntos clave.
