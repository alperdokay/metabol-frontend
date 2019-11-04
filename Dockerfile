FROM node:10.5 as build-stage

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build --prod --output-path=./dist


FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage app/dist/metabol /app

EXPOSE 80
