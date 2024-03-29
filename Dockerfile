FROM node:latest

# Set the working directory for the client
WORKDIR /usr/client

# Copy and install client dependencies
COPY client/package.json client/package-lock.json ./
RUN curl -v https://registry.npmjs.com/
RUN npm install --no-warnings

# Build client application
COPY client/ ./
RUN npm run build