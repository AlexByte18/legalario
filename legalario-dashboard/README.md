# Legalario Dashboard

Dashboard desarrollado con React + Vite para la gestión de usuarios de Legalario.

## Requisitos

- Node.js >= 18
- npm

## Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar la URL de la API

Edita el archivo `src/core/api.config.ts` y actualiza la URL de la API:

```typescript
export const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';
```

Cambia `http://127.0.0.1:8000` por la URL donde esté corriendo tu API de Laravel.

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```
