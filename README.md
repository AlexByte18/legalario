# Legalario

Mini-sistema fullstack para la gestión de usuarios desarrollada con Laravel (Backend) y React (Frontend).

## Estructura del Proyecto

El proyecto está dividido en dos aplicaciones independientes:

```
legalario/
├── legalario-api/         # Backend API (Laravel)
└── legalario-dashboard/   # Frontend Dashboard (React)
```

## Inicio Rápido

### 1. Backend (Laravel API)

Primero, configura y ejecuta el backend:

```bash
cd legalario-api
```

Sigue las instrucciones detalladas en [legalario-api/README.md](./legalario-api/README.md)

**Resumen:**
- Instalar dependencias: `composer install`
- Configurar `.env` con tu base de datos
- Ejecutar migraciones: `php artisan migrate`
- Iniciar servidor: `php artisan serve`

La API estará en: `http://127.0.0.1:8000`

### 2. Frontend (React Dashboard)

Una vez que el backend esté corriendo, configura el frontend:

```bash
cd legalario-dashboard
```

Sigue las instrucciones detalladas en [legalario-dashboard/README.md](./legalario-dashboard/README.md)

**Resumen:**
- Instalar dependencias: `npm install`
- Configurar URL de API en `src/core/api.config.ts`
- Iniciar servidor: `npm run dev`

El dashboard estará en: `http://localhost:5173`

## Requisitos del Sistema

### Backend
- PHP >= 8.2
- Composer
- MySQL

### Frontend
- Node.js >= 18
- npm

## Documentación Detallada

Para instrucciones completas de instalación y configuración, consulta los READMEs específicos:

- **Backend API**: [legalario-api/README.md](./legalario-api/README.md)
- **Frontend Dashboard**: [legalario-dashboard/README.md](./legalario-dashboard/README.md)
