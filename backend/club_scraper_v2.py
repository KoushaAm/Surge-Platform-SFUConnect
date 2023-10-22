"""

# this script scrapes the clubs listings similar to version 1 in addition to creating unique ids for each job.
# this script is used to generate the clubs.json file stored in "./backend/clubs.json"

    structure of the website : 
    <tbody><tr></tr> ... ... .. </tbody>  each tr tag is a job posting
    each <tr> tag has two <td> tags one for the logo's image and the other for title and description

"""


import requests
from bs4 import BeautifulSoup
import uuid
import json


url = "https://go.sfss.ca/clubs/list"
response = requests.get(url)


soup = BeautifulSoup(response.content, 'html.parser')
table = soup.find("table", id="club_listing")

jobs = {}



def generate_unique_id():
    return uuid.uuid4().hex[:6].upper()



for row in table.find_all("tr"):
    title = ""
    description = ""
    info_url = ""
    logo_url = ""

    cells = row.find_all("td")

    if len(cells) >= 2: 
        img_tag = cells[0].find("a").find("img") if cells[0].find("a") else None

        if img_tag and img_tag.get("src"):
            logo_url = "https://go.sfss.ca" + img_tag.get("src")

        text_tag = cells[1].find("b")
        if text_tag:
            title = text_tag.text.strip()
            info_url = "https://go.sfss.ca" + text_tag.find("a").get("href")

            description = cells[1].text.replace(title, "").strip().replace('"', '')

        job = {
            "id": generate_unique_id(),
            "title": title,
            "description": description,
            "info_url": info_url,
            "logo_url": logo_url
        }

        jobs[job["id"]] = job

# write to json file
with open('./backend/clubs.json', 'w') as outfile:
    json.dump(jobs, outfile, indent=4)
