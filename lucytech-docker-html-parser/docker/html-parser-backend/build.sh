#!/bin/bash

MAIN_DIR="${DIST_ROOT}/docker/html-parser-backend"

cd "${MAIN_DIR}" || exit 1

docker build -t html-parser-service:"${VERSION}" .