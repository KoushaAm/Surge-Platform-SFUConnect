import requests
from bs4 import BeautifulSoup

url = "https://go.sfss.ca/clubs/list"
response = requests.get(url)
clubs_list = []


if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    club_table = soup.find("table", id="club_listing")

    if club_table:
        
        club_name_elements = club_table.find_all("a")


        clubs_list = [club.text.strip() for club in club_name_elements]
        
        for club_name in clubs_list:
            print(club_name)
    else:
        print("TTable not found")
else:
    print("page didnt open", response.status_code)