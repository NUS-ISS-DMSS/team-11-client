FROM openjdk:17-jdk-alpine
ARG JAR_FILE=server/target/*.jar
COPY team-11/$JAR_FILE app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]