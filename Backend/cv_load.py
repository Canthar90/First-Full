import json


def load_cv_data():
    with open("cv_data.json", encoding='utf-8') as file:
        data = json.load(file)

    return data
