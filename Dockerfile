# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY index.js .

# Expose port 8080 for the application
EXPOSE 8080

# Start the app
CMD [ "node", "index.js"]
