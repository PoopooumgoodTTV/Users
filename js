let result = fetch("https://api.kirka.io/api/User/", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "BOT",
        "Accept": "text/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Upgrade-Insecure-Requests": "1",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "method": "GET",
    "mode": "cors"
});
