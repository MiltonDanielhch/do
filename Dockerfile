# ---- Build stage ----
FROM node:22-alpine AS builder

WORKDIR /app

# Instala dependencias de sistema necesarias para compilar módulos nativos
RUN apk add --no-cache \
    autoconf \
    automake \
    g++ \
    make \
    python3

# Copia manifiestos de dependencias
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install --frozen-lockfile

# Copia el resto del código fuente
COPY . .

# Build de la aplicación
RUN yarn build

# ---- Runtime stage ----
FROM nginx:alpine

# Copia los archivos estáticos generados
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Nginx ya tiene un CMD por defecto, no hace falta sobreescribirlo