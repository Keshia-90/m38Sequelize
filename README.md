# m38Sequelize

### This project was created during the CodeNation Master Bootcamp in which VS Code and it's terminal was used to add, list, update and delete movies or information related to the movie. In this project it is the actor being updated.

## VS Code Installs Required
### The following will need to be installed via the terminal in VS Code if the repository is being cloned.
* npm init - y
* npm i yargs dotenv sequelize mysql2
### In the .env folder enter MYSQL_URI = (*Your MYSQL URI*)

### Similar to the MySQL workbench, once a film has been deleted, the id is not used again. For example I had American Mary which had 4 as it's id and when I added another movie it went to an id of 5. In the app.js file I changed alter to false (line 7) as it wouldn't allow me to update an actor...not sure why but it allowed me to update the actor.

## Terminal Commands
### These will follow the input ***node src/app.js***
* --add --title "*Movie*" --actor "*Actor*" --rating "*rating/10*"
#### This will add a movie, an actor and a rating out of 10
* --delete --title "*Movie*"
#### This will delete the movie (as mentioned previously the id for the film deleted will not be used again)
* --update --title "*Movie*" --newActor "*New Actor*" --oldActor "*Old Actor*"
#### This will update the name inputted as the actor initially to the new actors name
* --list
#### This will list the movies that have been added to the database

