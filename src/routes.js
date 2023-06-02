const {listBahanHandler, listMenuHandler, getResepHandler} = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/dashboard/bahan',
        handler: listBahanHandler
    },
    {
        method: 'GET',
        path: '/dashboard/menu',
        handler: listMenuHandler
    },
    {
        method: 'GET',
        path: '/dashboard/menu/resep',
        handler: getResepHandler
    },
    // {
    //     method: 'GET',
    //     path: '/',
    //     handler: (request, h) => {
    //       const response = h.response('Hello World');
    //       response.header('01121', '01121'); // Menambahkan ID ke header
      
    //       return response;
    //     }
    // }
];

module.exports = routes;