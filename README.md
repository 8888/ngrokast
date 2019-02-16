# ngrokast
A simple way to broadcast your free version [ngrok](https://ngrok.com/) url to your phone.

## tldr;
$ngrok -> $ngrokast -> iOS shortcut -> localhost is viewable in chrome on mobile

## Usage
You can run ngrok in the background by sending stdout to the null device and broadcast the url using ngrokast.
```bash
$ ngrok http 3000 > /dev/null & ngrokast
```
If you would prefer to still have the terminal output from ngrok, run ngrok in one terminal and run ngrokast in a second.
```bash
$ ngrok http 3000 # in terminal 1
$ ngrokast # in terminal 2
```

## iOS Shortcut
Pairing the terminal command with an iOS shortcut creates one button click access to your computers localhost on your iOS device.
### shortcut config
```yaml
url:
  - https://your.lambda.url.com
getContentsOfUrl:
  - headers:
    - x-api-key: your-api-key
getDictionaryValue:
  - key: url
openUrlsInChrome:
```

## Dependencies
- [curl](https://curl.haxx.se/)
- [jq](https://stedolan.github.io/jq/)
- [aws lambda](https://aws.amazon.com/lambda/)
- [aws s3](https://aws.amazon.com/s3/)

## Deploy
Deploy from serverless straight to AWS:
```bash
$ serverless deploy
```

## Local execution
### broadcast
```bash
$ sls invoke local --function broadcast -d '{"url":"http://example.com"}'
```
### fetch
```bash
$ sls invoke local --function fetch
```

## Secrets files
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
