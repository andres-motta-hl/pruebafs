# pruebafs
Prueba s.r Full Stack

Funcionalidades:
* Registro y inicio de sesión de usuarios de manera segura.
* Adminstrar prestamos y devoluciones.
* Busqueda de productos por medio del buscador y selección de categorías.
* Modificación de libros.
* Creación de migraciones y seeders.
* Configuración de controladores y routers.
* Almacenamiento de tockens hacia las cookies del cliente con Laravel Sanctum.
* Creación de datos prueba para visualizar el correcto funcionamiento del sitio web.

Pendiente a realizar:
* Pruebas unitarias
* Métricas


# Despligue del proyecto
* Clonar el repositorio: Api: Larevel Reactfront: react
* Desde consola ir al directorio api/laravel
* Ejecutar: composer install y hacer el respectivo enlace con la base de datos local en el archvio .env.
* Ejecutar migraciones y seeders.
* Orden de ejecución de migraciones:
  - php artisan migrate --path=database/migrations/0001_01_01_000000_create_users_table.php
  - php artisan migrate --path=database/migrations/2024_05_21_172423_create_categories_table.php
  - php artisan migrate --path=database/migrations/2024_05_21_151041_create_books_table.php
  - php artisan migrate --path=database/migrations/2024_05_21_145331_create_loans_table.php
* Abrir xampp y habilitar servicios.
* Ahora desde consola ir al directorio de reactFront
* Ejecutar: npm i y luego npm start.

# Pruebas desde la web
* Crear usuarios de prueba
* Desde SQL local cambiar el atributo "role" a "admin" a un registro.
* Iniciar sesión desde el registro admin.
* Este rol podrá actualizar los datos de los libros.





