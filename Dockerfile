FROM cypress/base:12.22.9
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]
