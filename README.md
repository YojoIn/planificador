# Presupuesto PWA V4.1

1. Sube todos los archivos a la raíz del repositorio de GitHub.
2. GitHub: Settings > Pages > Deploy from branch > main > /(root).
3. Abre la URL de GitHub Pages por HTTPS.
4. El PIN inicial es 160226.

La interfaz se cachea como PWA, pero la sincronización y las operaciones con Supabase requieren Internet. El PIN se almacena en Supabase mediante bcrypt/pgcrypto; la clave usada por el cliente es la anon/public key, no una service_role.
