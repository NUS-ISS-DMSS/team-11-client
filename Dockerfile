FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY server/target/server-0.0.1.jar server-0.0.1.jar
EXPOSE 8080
CMD ["java", "-jar", "server-0.0.1.jar"]