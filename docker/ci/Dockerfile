    FROM node:14-alpine
     
    WORKDIR /build
    COPY package.json /build
    COPY package-lock.json /build
    RUN npm i

    COPY public /build/public
    COPY src /build/src
    RUN npm run build

    FROM httpd:alpine
    WORKDIR /var/www/html
    COPY --from=build /build/build/ .