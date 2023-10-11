#this is the base image where all OS related dependencies are there
FROM node:20

WORKDIR /app

COPY ./package*.json ./

#dependecies install
RUN npm install

#copy source code from working directory to Docker directory
COPY . .

RUN npm run build

EXPOSE 8080

#runs when container starts running
CMD [ "npm", "run", "dev" ]
