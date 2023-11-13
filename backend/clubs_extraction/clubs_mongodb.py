import json

# this class reformats the clubs.json to be comaptible to MongoDB's templat
# the output is saved in mongodb_clubs.json
def convert_to_mongodb_format(input_filename, output_filename):

    input_filename = './backend/clubs.json'
    output_filename = './backend/mongodb_clubs.json'

    with open(input_filename, 'r') as file:
        data = json.load(file)

    mongodb_data = []
    for club_name, club_data in data.items():
        mongodb_entry = {
            "_id": club_data["id"],
            "title": club_data["title"],
            "description": club_data["description"],
            "category": club_data["category"],
            "info_url": club_data["info_url"],
            "logo_url": club_data["logo_url"]
        }
        mongodb_data.append(mongodb_entry)

    with open(output_filename, 'w') as output_file:
        json.dump(mongodb_data, output_file, indent=2)


convert_to_mongodb_format('./clubs.json', 'mongodb_clubs.json')
