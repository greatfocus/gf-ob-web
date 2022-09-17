    ### STAGE 1: Build ###
    FROM node:14-alpine
     
    WORKDIR /build
    # install app dependencies
    COPY package.json package.json
    COPY package-lock.json package-lock.json
    RUN npm install

    # add app
    COPY public/ public
    COPY src/ src
    RUN npm run build

    EXPOSE 3000

    # start app
    CMD ["npm", "start"]