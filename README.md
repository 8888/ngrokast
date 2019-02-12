# ngrokast
A simple way to broadcast your free version [ngrok](https://ngrok.com/) url to your phone.

## Run
You can run ngrok in the background by sending stdout to the null device and broadcast the url using ngrokast.
```bash
$ ngrok http 80 > /dev/null & ngrokast
```
If you would prefer to still have the terminal output from ngrok, run ngrok in one terminal and run ngrokast in a second.
```bash
$ ngrok http 80
$ ngrokast
```

## Dependencies
- [curl](https://curl.haxx.se/)
- [jq](https://stedolan.github.io/jq/)
