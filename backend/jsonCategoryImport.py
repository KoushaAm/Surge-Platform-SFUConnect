import json
from transformers import pipeline


import os

# Get the absolute path of the directory containing the script
script_directory = os.path.dirname(os.path.abspath(__file__))

# Change the current working directory to the script directory
os.chdir(script_directory)

with open('./clubs.json', 'r') as file:
    clubs_data = json.load(file)

candidate_labels_set = ["Sports", "Academic", "Cultural", "Community Service", "Religious", "Science & Technology", "Arts", "Special Interest", "Student Government"]

pipe = pipeline(model="facebook/bart-large-mnli")
batch_size = 8

# Process descriptions in batches and update the "category" attribute
for start_idx in range(0, len(clubs_data), batch_size):
    end_idx = start_idx + batch_size
    batch_club_data = list(clubs_data.values())[start_idx:end_idx]
    descriptions = [club_info["description"] for club_info in batch_club_data]

    # Perform zero-shot classification in batches
    results = pipe(descriptions, candidate_labels=candidate_labels_set)

    # Update the "category" attribute for each club in the batch
    for i, club_info in enumerate(batch_club_data):
        # Access the predicted labels directly
        predicted_labels = results[i]["labels"]
        top_3_labels = predicted_labels[:3]
        club_info["category"] = top_3_labels

# Save the updated data back to the JSON file
with open("clubs.json", "w") as json_file:
    json.dump(clubs_data, json_file, indent=4)