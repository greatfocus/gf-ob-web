    ### STAGE 1: Build ###
    FROM node:14-alpine
     
    WORKDIR /app
    # install app dependencies
    COPY package.json /app
    COPY package-lock.json /app
    RUN npm install

    # add app
    COPY . /app
    RUN npm run build

    EXPOSE 3000

    # start app
    CMD ["npm", "start"]