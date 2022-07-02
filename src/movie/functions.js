const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (movieObj) => {
    try {
        const response = await Movie.findAll();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        //needs the where-similar to how workbench
        const response = await Movie.destroy({where: movieObj});
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovies = async (newActor,oldActor) => {
    try{
        const response = await Movie.update(newActor,oldActor);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
