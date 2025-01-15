#!/bin/bash

set -euo pipefail

DIST_ROOT=$(cd ../ && pwd)

source "${DIST_ROOT}/.properties"

source "${DIST_ROOT}/docker/html-parser-backend/build.sh"
source "${DIST_ROOT}/docker/html-parser-frontend/build.sh"
