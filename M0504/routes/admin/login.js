var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuarioModel');

router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async(req, res, next) => {
  try {
    var usuario = req.body.user;
    var password = req.body.password;
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if(data != undefined){
      req.session.id = data.id;
      req.session.usuario = data.usuario;
      res.render('admin/novedades', {
        layout: 'admin/layout',
        isLoged: true
      })
      res.redirect('/admin/novedades');
    }else{
      router.get('/', function(req, res, next) {
        res.render('admin/login', {
          layout: 'admin/layout',
          error: true
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
})

router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});


module.exports = router;
