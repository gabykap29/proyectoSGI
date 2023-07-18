const express = require('express');
const router = express.Router();
const isAutenticated = require('../middlewares/autenticate');

const {
    create,
    usersRead,
    userRead,
    userUpdate,
    userDeteled
} = require('../controllers/auth/user');

const {verificarRolAdmin} = require('../middlewares/checkRol');

//Vistas
// router.get('/register',async(req,res)=>{
//     return res.render('register');
// })

router.get('/view/usuarios', isAutenticated,verificarRolAdmin,(req,res)=>{
    res.render('users/vistaUsuario')
})

router.get('/view/usuarios/create',isAutenticated,verificarRolAdmin,(req,res)=>{
    res.render('users/vistaCrear')
})

//APIS

router.get('/api/usuarios', isAutenticated,verificarRolAdmin,usersRead);
router.get('/api/usuario/:id',isAutenticated,verificarRolAdmin,userRead);
router.put('/api/usuario/:id',isAutenticated,verificarRolAdmin,userUpdate);
router.post('/api/create',verificarRolAdmin,verificarRolAdmin,create);
router.put('/api/usuario/delete/id:',isAutenticated,verificarRolAdmin,userDeteled);


module.exports = router;