# German Cases JavaScript Game

This is a companion to an [earlier Python game](https://github.com/matthewmoonen/German-Nouns-Python-Game) that teaches German cases.

It runs in the browser, utilising primarily JavaScript, with a little bit of jQuery.

While it currently has just one lesson, the app has been built with future development in mind. 

Lesson content is served to the user via a JSON array, which is stored in the backend (currently a Python script on my Flask application). Future versions could serve individualised questions via an API. Evidence-based spaced repetition algorithms such as the Leitner System would be used to evaluate the most effective lesson content based on the users' previous results and learning.

Inspiration for this project came from my frustrations with the currently available German learning applications. There is often very little focus on concepts that students find particularly difficult such as cases, declensions, and rules for noun genders and plurals (and their exceptions!). These concepts are particularly complicated in German, which partly explains why the US Foreign Service Institute suggests achieving German fluency takes much longer than other West Germanic languages, such as Dutch.
