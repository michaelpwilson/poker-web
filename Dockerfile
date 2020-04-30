FROM nginx:1.17.1-alpine
COPY /dist/poker /usr/share/nginx/html
