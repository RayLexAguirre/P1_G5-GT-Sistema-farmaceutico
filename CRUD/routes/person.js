const express = require("express");
const router = express.Router();
//Ejecutamos una extencion de express donde enviara como enrutar al archivo server.js
const mongoose = require("../node_modules/mongoose"); //busca un directorio en especial
let Person = require("../models/person");
let Producto = require("../models/producto");
let Provedor = require("../models/provedor");
let Sucursal = require("../models/sucursal");

router.get("/", function (req, res) {
  res.render("main");
}); //Se crea una ruta raiz para cuando ingrese al localhost y esta ejecuta el index.ejs

router.get("/listPerson", (req, res, next) => {
  Person.find(function (err, person) {
    if (err) return next(err);
    //res.json(person); Ahora en lugar de renderizar el json de person
    res.render("personIndex", { person }); //Ejecutara el archivo 'personIndex' y tambien le envia el json
  });
}); //Se crea la ruta para ver el listo de registros en la coleccion

router.get("/addPerson", function (req, res) {
  res.render("person");
}); //Se crea el render con el objetivo poder ver el formulario donde podremos enviar los datos

router.post("/addPerson", function (req, res) {
  const myPerson = new Person({
    nombre: req.body.nombre,
    edad: req.body.edad,
    nss: req.body.nss,
    puesto_Trabajo: req.body.puesto_Trabajo,
    Salario: req.body.Salario,
  }); //Se creo una nueva identidad para que permita agregar a un nuevo objeto en el coleccion de MongoDB
  myPerson.save();
  res.redirect("/addPerson");
});

// Se crea una ruta a la cual va a poder acceder el servidor para poder observar la colecion

//DELETE PERSON - findByIdAndRemove
router.get("/deletePerson/:id", function (req, res, next) {
  Person.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y eliminara el objeto deseado
    res.redirect("/listPerson"); // Se recarga la pagina para actualizarse
  });
});

//EDIT PERSON - findById
router.get("/findById/:id", function (req, res, next) {
  Person.findById(req.params.id, function (err, person) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y se redirigira a la pagina de edicion
    res.render("personUpdate", { person }); //Renderiza la pagina de edicion
  });
});

router.post("/updatePerson", function (req, res, next) {
  Person.findByIdAndUpdate(
    req.body.objId,
    {
      nombre: req.body.nombre,
      edad: req.body.edad,
      nss: req.body.nss,
      puesto_Trabajo: req.body.puesto_Trabajo,
      Salario: req.body.Salario,
    }, //Actualiza la base de datos con lo editado en la pagina
    function (err, post) {
      if (err) return next(err);
      res.redirect("/listPerson");
    }
  ); //Se redirige a la pagina de la tabla actualizada
});

// ---------------A partir de aquí segunda variable--------------------------------

router.get("/listProducto", (req, res, next) => {
  Producto.find(function (err, producto) {
    if (err) return next(err);
    //res.json(person); Ahora en lugar de renderizar el json de person
    res.render("productoIndex", { producto }); //Ejecutara el archivo 'personIndex' y tambien le envia el json
  });
}); //Se crea la ruta para ver el listo de registros en la coleccion

router.get("/addProducto", function (req, res) {
  res.render("producto");
}); //Se crea el render con el objetivo poder ver el formulario donde podremos enviar los datos

router.post("/addProducto", function (req, res) {
  const myProducto = new Producto({
    codigoProducto: req.body.codigoProducto,
    provedor: req.body.provedor,
    nombre: req.body.nombre,
    cantidad: req.body.cantidad,
    precio: req.body.precio,
  }); //Se creo una nueva identidad para que permita agregar a un nuevo objeto en el coleccion de MongoDB
  myProducto.save();
  res.redirect("/addProducto");
});

// Se crea una ruta a la cual va a poder acceder el servidor para poder observar la colecion

//DELETE producto - findByIdAndRemove
router.get("/deleteProducto/:id", function (req, res, next) {
  Producto.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y eliminara el objeto deseado
    res.redirect("/listProducto"); // Se recarga la pagina para actualizarse
  });
});

//EDIT producto - findById
router.get("/PfindById/:id", function (req, res, next) {
  Producto.findById(req.params.id, function (err, producto) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y se redirigira a la pagina de edicion
    res.render("productoUpdate", { producto }); //Renderiza la pagina de edicion
  });
});

router.post("/updateProducto", function (req, res, next) {
  Producto.findByIdAndUpdate(
    req.body.objId,
    {
      codigoProducto: req.body.codigoProducto,
      provedor: req.body.provedor,
      nombre: req.body.nombre,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
    }, //Actualiza la base de datos con lo editado en la pagina
    function (err, post) {
      if (err) return next(err);
      res.redirect("/listProducto");
    }
  ); //Se redirige a la pagina de la tabla actualizada
});

// ---------------A partir de aquí tercera variable--------------------------------

router.get("/listProvedor", (req, res, next) => {
  Provedor.find(function (err, provedor) {
    if (err) return next(err);
    //res.json(person); Ahora en lugar de renderizar el json de person
    res.render("provedorIndex", { provedor }); //Ejecutara el archivo 'personIndex' y tambien le envia el json
  });
}); //Se crea la ruta para ver el listo de registros en la coleccion

router.get("/addProvedor", function (req, res) {
  res.render("provedor");
}); //Se crea el render con el objetivo poder ver el formulario donde podremos enviar los datos

router.post("/addProvedor", function (req, res) {
  const myProvedor = new Provedor({
    empresa: req.body.empresa,
    tipo: req.body.tipo,
    correo: req.body.correo,
    telefono: req.body.telefono,
    encargado: req.body.encargado,
  }); //Se creo una nueva identidad para que permita agregar a un nuevo objeto en el coleccion de MongoDB
  myProvedor.save();
  res.redirect("/addProvedor");
});

// Se crea una ruta a la cual va a poder acceder el servidor para poder observar la colecion

//DELETE provedor - findByIdAndRemove
router.get("/deleteProvedor/:id", function (req, res, next) {
  Provedor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y eliminara el objeto deseado
    res.redirect("/listProvedor"); // Se recarga la pagina para actualizarse
  });
});

//EDIT provedor - findById
router.get("/ProvfindById/:id", function (req, res, next) {
  Provedor.findById(req.params.id, function (err, provedor) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y se redirigira a la pagina de edicion
    res.render("provedorUpdate", { provedor }); //Renderiza la pagina de edicion
  });
});

router.post("/updateProvedor", function (req, res, next) {
  Provedor.findByIdAndUpdate(
    req.body.objId,
    {
      empresa: req.body.empresa,
      tipo: req.body.tipo,
      correo: req.body.correo,
      telefono: req.body.telefono,
      encargado: req.body.encargado,
    }, //Actualiza la base de datos con lo editado en la pagina
    function (err, post) {
      if (err) return next(err);
      res.redirect("/listProvedor");
    }
  ); //Se redirige a la pagina de la tabla actualizada
});

// ---------------A partir de aquí cuarta variable--------------------------------

router.get("/listSucursal", (req, res, next) => {
  Sucursal.find(function (err, sucursal) {
    if (err) return next(err);
    //res.json(person); Ahora en lugar de renderizar el json de person
    res.render("sucursalIndex", { sucursal }); //Ejecutara el archivo 'personIndex' y tambien le envia el json
  });
}); //Se crea la ruta para ver el listo de registros en la coleccion

router.get("/addSucursal", function (req, res) {
  res.render("sucursal");
}); //Se crea el render con el objetivo poder ver el formulario donde podremos enviar los datos

router.post("/addSucursal", function (req, res) {
  const mySucursal = new Sucursal({
    municipio: req.body.municipio,
    colonia: req.body.colonia,
    calle: req.body.calle,
    codigoPostal: req.body.codigoPostal,
  }); //Se creo una nueva identidad para que permita agregar a un nuevo objeto en el coleccion de MongoDB
  mySucursal.save();
  res.redirect("/addSucursal");
});

// Se crea una ruta a la cual va a poder acceder el servidor para poder observar la colecion

//DELETE sucursal - findByIdAndRemove
router.get("/deleteSucursal/:id", function (req, res, next) {
  Sucursal.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y eliminara el objeto deseado
    res.redirect("/listSucursal"); // Se recarga la pagina para actualizarse
  });
});

//EDIT sucursal - findById
router.get("/SucfindById/:id", function (req, res, next) {
  Sucursal.findById(req.params.id, function (err, sucursal) {
    if (err) return next(err); // Se crea la funcion la cual encontrara y se redirigira a la pagina de edicion
    res.render("sucursalUpdate", { sucursal }); //Renderiza la pagina de edicion
  });
});

router.post("/updateSucursal", function (req, res, next) {
  Sucursal.findByIdAndUpdate(
    req.body.objId,
    {
      municipio: req.body.municipio,
      colonia: req.body.colonia,
      calle: req.body.calle,
      codigoPostal: req.body.codigoPostal,
    }, //Actualiza la base de datos con lo editado en la pagina
    function (err, post) {
      if (err) return next(err);
      res.redirect("/listSucursal");
    }
  ); //Se redirige a la pagina de la tabla actualizada
});

module.exports = router;
