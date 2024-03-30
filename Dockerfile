# Use node image as base
FROM node:latest

# Set the working directory for the client
WORKDIR /usr/client

# Copy the package.json files and install dependencies
COPY client/package.json client/package-lock.json ./
RUN npm install

# Copy the client source code
COPY client/ ./

# Expose port if needed (optional)
EXPOSE 4000

# Define the command to start the application (adjust as needed)
CMD ["npm", "start"]