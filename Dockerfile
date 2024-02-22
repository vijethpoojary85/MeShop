# Use the official Node.js image as a base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Angular app
RUN npm run build --prod

# Expose port 80
EXPOSE 80

# Command to start the server
CMD ["npm", "start"]
