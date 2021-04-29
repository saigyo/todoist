# todoist

A simple Todo App with a Spring Boot backend and an Angular frontend.
The backend exposes its persistent models through a JSON:API resource
from a Spring Data repository backed by an in-memory H2 database.

# Build

```
./gradlew clean build
```

# Run

```
./gradlew :todoist-service:bootRun
```

# Frontend

See also [todoist-app/README](todoist-app/README.md)

## Tech Stack

- Gradle 6
- Kotlin 1.4
- Spring Boot 2.4
- H2 in-memory database
- Node v14
- NPM 6
- Angular 10
- Bootstrap
