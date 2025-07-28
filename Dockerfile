# Usa la imagen base de Node
FROM node:22-alpine AS builder

# Configura el directorio de trabajo
WORKDIR /app

# Instala herramientas de compilación
RUN apk add --no-cache --virtual .build-deps \
    autoconf \
    automake \
    g++ \
    make \
    python3

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json yarn.lock ./

# Instala dependencias
RUN yarn install --frozen-lockfile

# Elimina herramientas de compilación (para reducir tamaño de imagen)
RUN apk del .build-deps

# Copia el resto de los archivos
COPY . .

# Construye el proyecto
RUN yarn build

# Fase de producción con Nginx
FROM nginx:alpine

# Copia los archivos construidos
COPY --from=builder /app/build /usr/share/nginx/html