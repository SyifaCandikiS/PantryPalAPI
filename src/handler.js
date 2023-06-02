const listbahan = require('./bahan');
const listmenu = require('./menu');
const resep = require('./resep');

const listBahanHandler = (request, h) => {
    // const uang = request.headers.uang;
    
    // if (!uang) {
    //   return {
    //     Error: true,
    //     Message: 'Header Uang tidak ditemukan'
    //   };
    // }

    const listBahan = listbahan;

    return {
      Error: false,
      ListBahan: listBahan
    };
  };


const listMenuHandler = (request, h) => {

  const Var_listMenu = listmenu;

  return {
    Error: false,
    ListMenu: Var_listMenu
  };

};

const getResepHandler = (request, h) => {

  const Var_resep = resep;

  return {
    Error: false,
    ListResep: Var_resep
  };
};



module.exports = {
    listBahanHandler,
    listMenuHandler,
    getResepHandler
};
