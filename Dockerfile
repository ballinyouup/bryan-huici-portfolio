# Use an official Node runtime as the base image
FROM node:alpine

# Set the working directory in the container to /bryan-huici-portfolio
WORKDIR /bryan-huici-portfolio

# Copy package.json and package-lock.json to the work directory
COPY package*.json ./

# Install all dependencies of the project
RUN npm install

# Copy the rest of the application to the work directory
COPY . .

# Build the application
RUN npm run build

# Make port 3001 available to the outside world
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
