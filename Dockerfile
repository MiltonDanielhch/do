# Usa la imagen base de Node
FROM node:22-alpine AS builder

# Configura el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json yarn.lock ./

# Instala dependencias (Yarn ya está incluido en la imagen)
RUN yarn install --frozen-lockfile

# Copia el resto de los archivos
COPY . .

# Construye el proyecto
RUN yarn build

# Fase de producción con Nginx
FROM nginx:alpine

# Copia los archivos construidos
COPY --from=builder /app/build /usr/share/nginx/html

# Opcional: Personaliza la configuración de Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf