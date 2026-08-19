# Presupuesto PWA V4.2 — GitHub Pages + Supabase

Esta versión corrige el error **Invalid API key** de V4.1.

## Configuración

- Supabase URL: `https://pcrattifgychsydbdkwm.supabase.co`
- Usa la **Publishable Key** `sb_publishable_...` mediante el header `apikey`.
- No envía la Publishable Key como `Authorization: Bearer ...`, porque ese formato provocaba el error con la clave nueva.

## Subir a GitHub Pages

1. Extrae este ZIP.
2. Sube `index.html`, `manifest.json`, `sw.js`, `icon-192.png` e `icon-512.png` directamente a la raíz del repositorio.
3. GitHub → **Settings → Pages**.
4. Source: **Deploy from a branch**.
5. Branch: `main` y carpeta `/ (root)`.
6. Guarda y abre la URL de GitHub Pages.

## Importante

La Publishable Key está diseñada para poder estar en una aplicación web pública. La seguridad de los datos debe depender de las políticas RLS y de las funciones RPC de Supabase. El PIN de administrador debe verificarse en el servidor; no se debe confiar únicamente en JavaScript del navegador.

La PWA mantiene la interfaz en caché, pero las operaciones con Supabase necesitan conexión al servidor.
