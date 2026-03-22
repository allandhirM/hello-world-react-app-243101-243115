#!/bin/bash
cd /tmp/kavia/workspace/code-generation/hello-world-react-app-243101-243115/hello_world_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

