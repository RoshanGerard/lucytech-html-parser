# Docker Distribution Project

## Overview
This project contains two Docker services:
- **HTML Parser Service Docker**
- **HTML Parser UI Docker**

Each service has its respective Dockerfile located in the `docker/` directory. The `bin/` directory contains a script to build all Docker images, and the `.properties` file defines the Docker tag version.

### Usage
To build and run the HTML Parser Service Docker image:
1. Build the Docker image:
   ```shell
   cd ./bin
   ./build.sh
   ```
2. Run docker services.
   ```shell
   cd ./docker-compose
   docker compose up -d
   ```

## Author

- **Developer**: Roshan G. Bolonna
- **Email**: srgbolonna@gmail.com
- **GitHub**: [GitHub Profile](https://github.com/RoshanGerard)
- **Website**: [LinkedIn](https://www.linkedin.com/in/srgbolonna)

If you have any questions or feedback, feel free to reach out.