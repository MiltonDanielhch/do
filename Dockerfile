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

# Instala las dependencias (ignora optional para evitar fsevents en Linux)
RUN npm install --ignore-scripts

# Copia el resto del código fuente
COPY . .

# Build de la aplicación
RUN npm run build

# ---- Runtime stage ----
FROM nginx:alpine

# Copia config de nginx personalizado
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos generados
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80