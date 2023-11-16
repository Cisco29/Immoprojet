module.exports = (app) => {

    // Définir une route pour la page d'accueil
    app.get('/', (request, response) => {
        let objController = require('../src/controllers/HomeControllers')
        objController.index(request, response)
    });

    // mes autres routes ici


}