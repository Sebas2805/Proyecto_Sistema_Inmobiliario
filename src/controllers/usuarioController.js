const Usuario = require('../models/usuarios');
const bcrypt = require('bcrypt');



exports.register = async (req, res) => {
  try {
    const { identificacion, correo, contrasena } = req.body;

    const existe = await Usuario.findOne({
      $or: [{ correo }, { identificacion }]
    });

    if (existe) {
      return res.status(400).json({
        message: "El usuario ya está registrado"
      });
    }

    const hash = await bcrypt.hash(contrasena, 10);

    const nuevo = new Usuario({
      identificacion,
      correo,
      contrasena: hash
    });

    await nuevo.save();

    res.json({ message: "Usuario registrado correctamente" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en registro" });
  }
};


exports.login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({ message: "Usuario no existe" });
    }

    const match = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!match) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    res.json({
      message: "Login correcto",
      usuario
    });

  } catch (error) {
    res.status(500).json({ message: "Error en login" });
  }
};