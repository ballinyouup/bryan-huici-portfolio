# Use Node.js v18 as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /bryan-huici-portfolio

# Copy package.json and package-lock.json to the work directory
COPY package*.json ./

# Install all dependencies
RUN npm ci

# Copy the rest of the application to the work directory
# COPY . .

# Build the application
RUN npm run build

# Make port 3000 available to the outside world
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
