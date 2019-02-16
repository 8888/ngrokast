#! /bin/sh

source secrets.sh # or full path if aliased
URL=$(curl http://localhost:4040/api/tunnels | jq ".tunnels[0].public_url")
curl -H "x-api-key: $API_KEY" -H "Content-Type: application/json" -d '{"url":'$URL'}' $API_URL
