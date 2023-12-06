terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

resource "docker_image" "backend_auth_service" {
  name = "backend_auth_service:latest"

  build {
    context    = "./AuthServiceApp"
    dockerfile = "Dockerfile"
  }
}

# Start a container
resource "docker_container" "backend_container" {
  name = "backend_container"

  image = docker_image.backend_auth_service.image_id
  ports {
    internal = 3000
    external = 8000
  }
}