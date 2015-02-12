#!/usr/bin/python2.7

import argparse
import urllib
from bs4 import BeautifulSoup

#TODO Parse arguments
URL="http://legislature.vermont.gov/bill/status/2016/H.159"


def fetch_url(url):
	opener = urllib.FancyURLopener({})
	f = opener.open(url)
	return f.read()

page = fetch_url(URL)

soup = BeautifulSoup(page)

print soup.select("h4 .charge")
