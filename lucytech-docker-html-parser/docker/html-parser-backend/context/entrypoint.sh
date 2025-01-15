#!/bin/bash

# Check if Xvfb is already running for display 99
if pgrep -f "Xvfb :99" > /dev/null; then
    echo "Xvfb is already running on display 99"
else
    echo "Starting Xvfb on display 99"
    Xvfb :99 -screen 0 1024x768x24 &
    sleep 5 # Give Xvfb time to start
fi

# Set DISPLAY environment variable
export DISPLAY=:99

# Start your application
/app/main
