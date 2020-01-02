FROM node:alpine as builder
WORKDIR '/app'

copy package.json .
RUN npm install

copy . .

RUN npm run build

FROM nginx
copy --from=builder /app/build /usr/share/nginx/html
