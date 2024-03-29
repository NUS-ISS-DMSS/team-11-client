FROM node:latest

# Set the working directory for the client
WORKDIR /usr/client

# Copy and install client dependencies
COPY client/package.json client/package-lock.json ./
RUN npm install

# Build client application
COPY client/ ./
RUN npm run build

# Set the working directory for the server
WORKDIR /usr/server

# Copy server source code
COPY server/ ./

# Expose the port for the server (change if necessary)
EXPOSE 4000

# Start the server
CMD ["mvn", "spring-boot:run"]