const https = require('https');
const query = 'malaysian people portrait site:wikimedia.org';
https.get('https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query), {headers: {'User-Agent': 'Mozilla/5.0'}}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const matches = data.match(/https:\/\/[^"]+\.jpg/g);
    console.log(matches ? matches.slice(0, 10) : 'none');
  });
});
