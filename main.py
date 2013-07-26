from flask import Flask
from flask import render_template
from lib import get_delta_from_url, get_urls_for_min

app = Flask(__name__)


@app.route('/')
def home():
    hours = range(1,13)

    # Leading zero
    z = lambda s: "0"+str(s) if s < 10 else str(s)
    minutes = [z(m) for m in range(0,60)]

    return render_template('home.html', hours=hours, minutes=minutes)


@app.route('/sitemap.xml')
def sitemap():
    num = []
    for h in range(1,25):
        for m in range(0, 60):
            num.append("%s-%s" % (h, m))
    return render_template('sitemap_index.html', num=num)


@app.route('/sitemap-<int:hour>-<int:min>.xml')
def sitemap_index(hour, min):
    urls = get_urls_for_min(hour, min)
    return render_template('sitemap.html', urls=urls)


@app.route('/<time>')
def time_to_time(time):
    # Sample "/10-14am-to-9-55pm"
    start, end, diff = get_delta_from_url(time)
    return render_template('time.html', diff=diff, start=start, end=end)

import socket
# Deployed on server, run via uwsgi
if socket.gethostname()[-5:] == "-prod":
    application = app
elif __name__ == '__main__':
    app.run(debug=True)
