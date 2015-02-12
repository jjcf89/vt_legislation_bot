#!/usr/bin/python2.7

import argparse
import urllib

#TODO Parse arguments
URL="http://legislature.vermont.gov/bill/status/2016/H.159"


def fetch_url(url):
	opener = urllib.FancyURLopener({})
	f = opener.open(url)
	return f.read()

print fetch_url(URL)
