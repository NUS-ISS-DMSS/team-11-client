# Stage 1: Build the client-side application
FROM node:latest AS client-builder

# Set the working directory for the client
WORKDIR /usr/client

# Copy and install client dependencies
COPY client/package.json client/package-lock.json ./
RUN npm install

# Build client application
COPY client/ ./
RUN npm run build

# Stage 2: Build the server-side application
FROM maven:latest AS server-builder

# Set the working directory for the server
WORKDIR /usr/server

# Copy and install server dependencies
COPY server/pom.xml ./
RUN mvn dependency:go-offline

# Copy server source code
COPY server/ ./

# Build server application
RUN mvn package

# Stage 3: Combine client and server into a single image
FROM openjdk:latest

# Set the working directory for the application
WORKDIR /usr/app

# Copy client build artifacts
COPY --from=client-builder /usr/client/build ./client

# Copy server build artifacts
COPY --from=server-builder /usr/server/target/*.jar ./server.jar

# Expose the ports for client and server (change if necessary)
EXPOSE 3000 4000

# Start the client and server
CMD ["java", "-jar", "server.jar"]