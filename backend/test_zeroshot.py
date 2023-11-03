
from transformers import pipeline 

candidate_labels_set = ["Sports", "Academic", "Cultural", "Community Service", "Religious", "Science & Technology", "Arts", "Special Interest", "Student Government"]


desc = ["TEDxSFU conferences provide a platform for industry professionals, advocates, educators, and storytellers to showcase their ideas worth spreading. Through community conferences, dialogue sessions, and social events, we\u2019re excited to build community spaces for storytelling, dialogue, and exploration of today\u2019s most intriguing and pressing topics.", "a club were students can come together and make aerospace enginegineering projects for a brighter advanced future"]

pipe = pipeline(model="facebook/bart-large-mnli")

result = pipe(desc,
    candidate_labels=candidate_labels_set,
)


print(result)

# from transformers import pipeline

# pipe = pipeline("zero-shot-classification")


# candidate_labels=[ "social", "cultural", "political", "religious", "service", "special interest", "student government", "other"]

# result = pipe("contribute to the society by helping out old people", candidate_labels=candidate_labels)
# print(result)

# # Get the index of the label with the maximum score
# max_score_index = result["scores"].index(max(result["scores"]))

# # Get the corresponding label
# max_score_label = candidate_labels[max_score_index]
# print(max_score_label)


