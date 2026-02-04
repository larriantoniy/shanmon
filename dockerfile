# ---------- stage 1: build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# сначала зависимости (кешируется)
COPY package*.json ./
RUN npm install

# потом исходники
COPY . .

# сборка (Vite / React / Vue)
RUN npm run build


# ---------- stage 2: nginx ----------
FROM nginx:alpine

# удаляем дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# наш nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# копируем собранный dist из builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
