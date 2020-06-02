#!/bin/sh
exec pwd | awk -F'/' '{print $NF}' && pm2 update && pm2 start ./Server/index.js && node /home/theia/theia-production/src-gen/backend/main.js /home/project --hostname=0.0.0.0