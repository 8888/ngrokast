# ngrokast
A simple way to broadcast your free version [ngrok](https://ngrok.com/) url to your phone.

## Usage
You can run ngrok in the background by sending stdout to the null device and broadcast the url using ngrokast.
```bash
$ ngrok http 80 > /dev/null & ngrokast
```
If you would prefer to still have the terminal output from ngrok, run ngrok in one terminal and run ngrokast in a second.
```bash
$ ngrok http 80 # in terminal 1
$ ngrokast # in terminal 2
```

## Dependencies
- [curl](https://curl.haxx.se/)
- [jq](https://stedolan.github.io/jq/)
- [aws lambda](https://aws.amazon.com/lambda/)
- [aws s3](https://aws.amazon.com/s3/)

## Local execution
### broadcast
```bash
$ sls invoke local --function broadcast -d '{"url":"http://example.com"}'
```
### fetch
```bash
$ sls invoke local --function fetch
```

# Secrets files
You need to create the required secrets files that are not version controlled.
### secrets&#46;sh
```bash
#! bin/sh

API_KEY=""
API_URL=""
```
### secrets.json
```json
{
  "bucket": ""
}
```
