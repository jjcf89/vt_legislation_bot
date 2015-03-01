# vt_legislation_bot
Test script to parse useful information from http://legislature.vermont.gov/bill/status

## Information to scrap

List css selectors to grab html tag containing desired information

All interesting information contained inside of Selector:"div #main-content"

### Bill Number
Selector:h1

### Bill Year
Parse from URL?

### Description
Selector:"h4 .charge"

### Location
Inside of Selector:"dl .summary-table"

Inside dd tag after dt tag containing "Location"

### Sponsors
Inside of Selector:"dl .summary-table"

Inside dd tag after dt tag containing "Sponsor(s)"

### Full status
Inside table Selector:"#bill-detailed-status-table"

"FULL STATUS" is 4th column

### URL
Grab url, no css selector


## Example output:
```
H.159
An act relating to abandoned swimming pools

Location:
House Committee on General, Housing and Military Affairs

Sponsor(s):
Rep. Jim Masland
Additional Sponsors
Rep. Timothy Briglin

Read First Time and Referred to the Committee on General, Housing & Military Affairs

http://legislature.vermont.gov/bill/status/2016/H.159
```
## Python Libraries planned to use

Parsing arguments: https://docs.python.org/2/library/argparse.html

Fetching Webpage: https://docs.python.org/2/library/urllib.html

Parsing HTML: http://www.crummy.com/software/BeautifulSoup/

