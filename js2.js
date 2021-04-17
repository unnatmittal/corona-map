var unirest = require("unirest");

var req = unirest("GET", "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php");

req.query({
	"completedlimit": "5",
	"inprogresslimit": "5",
	"upcomingLimit": "5"
});

req.headers({
	"x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
	"x-rapidapi-key": "02e96e6a63mshb86fb81a0dd22d7p1f695ajsn25e60fc8d39f",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});