# Use Node.js v18 as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /bryan-huici-portfolio

# Copy package.json and package-lock.json to the work directory
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application to the work directory
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]
