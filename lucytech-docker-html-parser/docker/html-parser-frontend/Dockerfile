# Use the official Node.js image
FROM node:20-alpine

# Install git
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/RoshanGerard/lucytech-fe-html-parser .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Use a lightweight web server to serve the build files
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=0 /app/dist /usr/share/nginx/html

COPY context/entrypoint.sh /entrypoint.sh
COPY context/nginx/default.conf /etc/nginx/conf.d/default.conf

RUN chmod +x /entrypoint.sh

RUN apk add --no-cache bash

# Expose port 80
EXPOSE 80

# Command to run nginx
ENTRYPOINT [ "/entrypoint.sh" ]