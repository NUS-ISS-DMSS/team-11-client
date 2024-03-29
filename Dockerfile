# FROM node:latest

# # Set the working directory for the client
# WORKDIR /usr/client

# # Copy and install client dependencies
# COPY client/package.json client/package-lock.json ./
# RUN npm install --no-warnings

# # Build client application
# COPY client/ ./
# RUN npm run build

# # Set the working directory for the server
# WORKDIR /usr/server

# # Copy server source code
# COPY server/ ./

# # Expose the port for the server (change if necessary)
# EXPOSE 4000

# # Start the server
# CMD ["mvn", "spring-boot:run"]

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

# Copy and install server dependencies
COPY server/package.json server/package-lock.json ./
RUN npm install