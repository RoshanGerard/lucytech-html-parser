# Use the official Golang image based on Debian
FROM golang:1.23

# Set the Current Working Directory inside the container
WORKDIR /app

# Install necessary packages
RUN apt-get update && apt-get install -y \
    git \
    chromium \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

# Clone the repository
RUN git clone https://github.com/RoshanGerard/lucytech-be-html-parser .

# Download all dependencies
RUN go mod download

# Build the Go app
RUN go build -o main ./cmd/main.go

COPY context/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

# Command to run the executable with Xvfb
#ENTRYPOINT ["sh", "-c", "xvfb-run --auto-servernum --server-args='-screen 0 1024x768x24' ./entrypoint.sh"]
ENTRYPOINT [ "/entrypoint.sh" ]
