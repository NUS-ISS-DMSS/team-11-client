# Stage 1: Build the client-side application
FROM node:latest AS client-builder

# Set the working directory for the client
WORKDIR /usr/client

# Copy and install client dependencies
COPY client/package.json ./
RUN npm install

# Copy client source code
COPY client/ .

# Build client application
RUN npm run build

# Stage 2: Build the server-side application
FROM maven:latest AS server-builder

# Set the working directory for the server
WORKDIR /usr/server

# Copy server source code
COPY server/ .

# Build server application
RUN mvn package

# Stage 3: Final image
FROM openjdk:latest

# Set the working directory for the application
WORKDIR /usr/app

# Copy built client and server artifacts
COPY --from=client-builder /usr/client/build ./client
COPY --from=server-builder /usr/server/target/*.jar ./server.jar

# Expose the ports for client and server
EXPOSE 4000
EXPOSE 8080

# Start the client and server
CMD ["java", "-jar", "server.jar"]