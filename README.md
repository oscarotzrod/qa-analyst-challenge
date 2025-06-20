# APP
## Pasos para iniciar un proyecto de nodeJS

1. Node.js — Pruebas avanzadas de API REST + integración 

Tareas:

Escribir pruebas unitarias y de integración con Jest para:
Validar el endpoint GET /users/:id con:

Usuario existente
Usuario no encontrado (404)
Configurar y usar MongoMemoryServer para las pruebas (evitar DB real).
Añadir pruebas para otro endpoint POST /users que cree un usuario con validación.

2. Python

curl -X POST http://localhost:8000/stats \
  -H "Content-Type: application/json" \
  -d '{"numbers": [1, 2, 3]}'


Crear tests con pytest para:
-- Diferentes listas de números 
-- Casos borde: lista vacía, números negativos, decimales.
-- Añadir fixtures si es necesario.
-- Testear respuesta a entrada inválida (ejemplo: numbers como string o nulo).

3. E2E

Hacer un proceso de E2E para la acción del login en el siguiente portal

a. Automatizar el proceso de login:

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
