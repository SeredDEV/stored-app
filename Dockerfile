# Etapa de construcción
# docker build -t stored-app .
# docker run -d -p 8080:80 stored-app

FROM node:20.14.0-alpine as build

WORKDIR /app

# Copiar archivos de configuración primero
COPY package*.json ./
COPY vite.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY index.html ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY public/ ./public/
COPY src/ ./src/
COPY README.md ./

# Listar archivos para debug
RUN ls -la

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos construidos
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]