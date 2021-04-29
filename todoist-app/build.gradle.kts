plugins {
  id ("java")
  id ("com.moowork.node") version "1.3.1"
}

node {
  version = "14.5.0"
  npmVersion = "6.14.5"
  download = false
}

tasks.jar {
  dependsOn("npm_run_build")
  from("dist/todoist-app").into("static")
}
