FROM node:latest

# Create Directory for the Container
WORKDIR /app
# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /app
# TypeScript
RUN npm run build

CMD npm start
EXPOSE 7001