# Use node image as base
FROM node:latest

# Set the working directory for the client
WORKDIR /usr

# Copy the package.json files and install dependencies
COPY package.json ./
RUN npm install

# Copy the client source code
COPY / ./

# Expose port if needed (optional)
EXPOSE 3000

# Define the command to start the application (adjust as needed)
CMD ["npm", "start"]