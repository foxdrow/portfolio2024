# pull official base image
FROM node:20

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN npm install
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

RUN npm run build

# expose port 3000
EXPOSE 3000

# start app
CMD ["npm", "start"]