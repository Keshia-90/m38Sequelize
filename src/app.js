const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, deleteMovie, updateMovies } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
      //had to change alter to false not sure why but would say --sqlMessage: 'Too many keys specified; max 64 keys allowed',-- in the terminal 
    await sequelize.sync({ alter: false });
    if (yargsObj.add) {
      //add something to movie table
    await addMovie({ title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating });
    } else if (yargsObj.list) {
      //list contents of movie table
    await listMovies();
    } else if(yargsObj.update) {
      //update one entry in movie table
      await updateMovies({actor:yargsObj.newActor},{where:{title:yargsObj.title}});
    } else if (yargsObj.delete) {
      //delete entry from movie table
    await deleteMovie({ title: yargsObj.title });

    } else {
    console.log("Incorrect command");
    }
    } catch (error) {
    console.log(error);
    } finally {
    await sequelize.close();
    }
};

app(yargs.argv);