FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --platform=linux --arch=x64 @rollup/rollup-linux-x64-gnu
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]