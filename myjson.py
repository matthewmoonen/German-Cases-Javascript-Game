
def main():
    return "error"

def lesson_json():

    return [
        {
        "lessonTitle": "Silly Questions",
        "difficulty": "depends on a number of factors",
        "funniness": "somewhat",
        "posPointAggregate": 10,
        "negPointAggregate": 4,
        "lives": 5,
        },
        {
        "questionID": "AA01",
        "question": "What is your name?",
        "options": [["Bart", False], ["Matthew", True], ["Lisa", False]],
        "type": "multiChoice",
        },
        {
        "questionID": "AA02",
        "question": "What is your favourite colour?",
        "options": [["Pink", True], ["#e1ad01", False], ["Pantone 448 C", False]],
        "type": "multiChoice",
        },
        {
        "questionID": "AA03",
        "question": "Why did the chicken cross the road?",
        "options": [["To bock traffic", True], ["I don't know", False]],
        "type": "multiChoice",
        },
        {
        "questionID": "AA04",
        "question": "What is the air speed velocity of an unladen swallow?",
        "options": [["99", False], ["What do you mean? African or European swallow?", True], ["Infinity", False]],
        "type": "multiChoice",
        },
        {
        "questionID": "AA05",
        "question": "What is the answer to life, the universe and everything?",
        "options": [["666", False], ["Forty-two", True]],
        "type": "multiChoice",
        },
        {
        "questionID": "AA06",
        "question": "What animal can jump higher than a house?",
        "options": [["Many - houses can't jump", True], ["Only a kangaroo", False]],
        "type": "multiChoice",
        },
        ]
    
if __name__ == "__main__":
    main()