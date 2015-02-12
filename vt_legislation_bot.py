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
main_content = soup.select("#main-content")[0]

description = main_content.select(".charge")[0].string
print description
print

summary_table = main_content.select(".summary-table")[0]

location_dt = summary_table.find("dt", text="Location")
print location_dt.string
location_dd = location_dt.next_sibling.next_sibling
print location_dd.string
print

sponsors_dt = summary_table.find("dt", text="Sponsor(s)")
print sponsors_dt.string
#for sib in sponsors_dt.next_siblings:
#	print "##", sib
sponsors_dd = sponsors_dt.next_sibling.next_sibling

#Iterate over list
for li in sponsors_dd.find_all("li"):
	print li.string
