# Navere (Unfinished)
Your ultimate life companion! Plan your days, manage routines, track well-being, journal your thoughts, and schedule meetings—all in one intuitive and friendly app designed to keep you balanced and productive👋.

## User Requirement Gathering Doc
See google doc a breakdown of user requirements
https://docs.google.com/document/d/1WmGJwuZbams12brEstfC-XcB0sAwpOCzebNikiRu0FA/edit?tab=t.0

## API Endpoints
Technical Requirements
/api/{entity-name}/…[children]/{id}

## APIs (Http Endpoints)
-  GET	/api/calendar 	returns a JSON record of daysOfTheWeek and year
-  POST	/api/tasks		accepts a JSON object to create a task
-  GET	/api/tasks		returns a JSON Array of all tasks
-  GET	/api/tasks?userId={val..}	return Tasks based on UserId
-  POST	/api/notes		accepts a JSON object to create a note
-  GET	/api/notes		returns a JSON Array of all notes
-  GET	/api/notes?userId={val..}	return Notesbased on UserId
-  POST	/api/events		accepts a JSON object to create an event
-  GET	/api/events		returns a JSON Array of all events
-  GET	/api/events?userId={val..}	return Events based on UserId
