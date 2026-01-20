# Legalario API

API REST desarrollada con Laravel para la gestión de usuarios de Legalario.

## Requisitos

- PHP >= 8.2
- Composer
- MySQL o PostgreSQL
- Node.js y npm (opcional, para compilar assets)

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/AlexByte18/legalario.git
cd legalario-api
```

### 2. Instalar dependencias

```bash
composer install
```

### 3. Configurar variables de entorno

```bash
cp .env.example .env
```

Edita el archivo `.env` y configura tu base de datos:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=legalario
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Generar la clave de aplicación

```bash
php artisan key:generate
```

### 5. Ejecutar migraciones

```bash
php artisan migrate
```

### 5. Ejecutar seed

```bash
php artisan db:seed
```

### 6. Iniciar el servidor

```bash
php artisan serve
```

La API estará disponible en: `http://127.0.0.1:8000`

## Endpoints Principales

### Usuarios

- `GET /api/v1/users?search=nombre` - Listar usuarios (requiere token)
- `POST /api/v1/users` - Crear usuario (requiere token)
