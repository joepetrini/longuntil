import re
from datetime import datetime


def _z(s):
    s = str(s)
    if len(s) == 1:
        s = s + "0"
    return s


def get_delta_from_url(url):
    # Sample "/10-14am-to-9-55pm"
    m = re.match("(\d{1,2})\-(\d{2})(am|pm)\-to\-(\d{1,2})\-(\d{2})(am|pm)", url)
    if m is None:
        print "MALFORMED URL %s" % url
        return

    hour = int(m.groups()[0])
    minute = str(m.groups()[1])
    ap = m.groups()[2]
    start_str = "%s:%s%s" % (hour, _z(minute), ap)

    start_dt = datetime.strptime("%s:%s:00 %s" % (hour, minute, ap), '%I:%M:%S %p')

    hour = int(m.groups()[3])
    minute = str(m.groups()[4])
    ap = m.groups()[5]
    end_str = "%s:%s%s" % (hour, _z(minute), ap)

    print "HOUR %s" % hour
    #if ap == 'pm':
    #    hour += 12

    end_dt = datetime.strptime("%s:%s:00 %s" % (hour, minute, ap), '%I:%M:%S %p')

    return start_str, end_str, end_dt - start_dt


def get_urls_for_min(hour, minute):
    urls = []
    minute = str(minute) if minute > 9 else "0"+str(minute)
    ap = "am" if hour < 13 else "pm"
    hour =  hour if hour < 13 else hour - 12
    from_str = "%s-%s%s" % (hour, minute, ap)
    for hh in range(1, 25):    
        ap = "am" if hh < 13 else "pm"
        hh =  hh if hh < 13 else hh - 12        
        for m in range(0, 60):
            m = str(m) if m > 9 else "0"+str(m)
            to_str = "%s-%s%s" % (hh, m, ap)
            urls.append("%s-to-%s" % (from_str, to_str))
    return urls
