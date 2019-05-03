var inquirer = require("inquirer");
var spotify = require('spotify');


const optionsSpotify = {
    provider: "spotify",
    apiKey: process.env.SPOTIFY_API_KEY
  };

  const optionsTicketMaster = {
    provider: "spotify",
    apiKey: process.env.TICKETMASTER_API_KEY
  };

  const optionsOMDB = {
    provider: "spotify",
    apiKey: process.env.OMDB_API_KEY
  };
