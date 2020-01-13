const routes = require('next-routes')

module.exports = routes()
.add('index')                                      
.add('channel', '/:slug.:id', 'channel') // Como aparecera en el buscador -- Parametros que pasaremos -- Pagina que renderizará