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

# Get website
page = fetch_url(URL)

# Feed page into BeautifulSoup parser
soup = BeautifulSoup(page)
# We are going to ignore everything outside of the #main-content div
main_content = soup.select("#main-content")[0]

# Bill description contained in the div .charge class
description = main_content.select(".charge")[0].string
print description
print

# Locations and Sponsors are included in the summary-table
summary_table = main_content.select(".summary-table")[0]

# Grab location header and print
location_dt = summary_table.find("dt", text="Location")
print location_dt.string
# Go over two tags to find location contents
location_dd = location_dt.next_sibling.next_sibling
print location_dd.string
print

# Grab sponsors header and print
sponsors_dt = summary_table.find("dt", text="Sponsor(s)")
print sponsors_dt.string
# Go over two tags to find sponsors contents
sponsors_dd = sponsors_dt.next_sibling.next_sibling
#Iterate over list of sponsors and print
for li in sponsors_dd.find_all("li"):
	print li.string
