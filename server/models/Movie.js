const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = Schema(
    {
        title: { type: String, required: true, unique: false, default: '' },
        original_title: { type: String, required: false, unique: false, default: '', },
        imdb_title_id: { type: String, required: false, unique: true, default: '' },
        year: { type: String, required: false, unique: false },
        date_published: { type: String, required: false, unique: false, default: '' },
        genre: { type: String, required: false, unique: false, default: '' },
        duration: { type: String, required: false, unique: false },
        country: { type: String, required: false, unique: false, default: '' },
        language: { type: String, require: false, unique: false, default: '' },
        director: { type: String, require: false, unique: false, default: '' },
        writer: { type: String, require: false, unique: false, default: '' },
        production_company: { type: String, require: false, unique: false, default: '', },
        budget: { type: String, require: false, unique: false, default: '' },
        actors: { type: String, require: false, unique: false, default: '' },
        description: { type: String, require: true, unique: false, default: '' },
        avg_vote: { type: String, required: false, unique: false },
        votes: { type: String, required: false, unique: false },
        reviews_from_users: { type: String, required: false, unique: false },
        reviews_from_critics: { type: String, required: false, unique: false },

    },

    {
        timestamps: true,
    },
);


const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
