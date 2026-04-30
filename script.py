import urllib.request, urllib.parse, re

def get_google_image(query):
    try:
        url = 'https://www.google.com/search?tbm=isch&q=' + urllib.parse.quote(query)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'https://[^\"\'\s]+\.(?:jpg|jpeg|png)', html)
        valid_links = [l for l in links if 'gstatic' not in l and 'google' not in l]
        return valid_links[0] if valid_links else None
    except Exception as e:
        return str(e)

print('Melissa:', get_google_image('malaysian chinese woman portrait'))
print('Faizal:', get_google_image('malay man portrait'))
print('Thye:', get_google_image('malaysian chinese middle aged man portrait'))
print('Tan:', get_google_image('asian young woman smiling portrait'))
print('Nik:', get_google_image('malay woman hijab portrait'))
print('Priya:', get_google_image('malaysian indian woman portrait'))
