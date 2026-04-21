const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const proyectoRoutes      = require('./routes/proyectoRoutes');
const propiedadRoutes     = require('./routes/propiedadRoutes');
const clienteRoutes       = require('./routes/clienteRoutes');
const contratoRoutes      = require('./routes/contratoRoutes');
const facturaRoutes       = require('./routes/facturaRoutes');
const pagoRoutes          = require('./routes/pagoRoutes');
const movimientoRoutes    = require('./routes/movimientoRoutes');
const ordenRoutes         = require('./routes/ordenRoutes');
const materialRoutes      = require('./routes/materialRoutes');
const bodegaRoutes        = require('./routes/bodegaRoutes');
const departamentoRoutes  = require('./routes/departamentoRoutes');
const empleadoRoutes      = require('./routes/empleadoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', proyectoRoutes);
app.use('/api', propiedadRoutes);
app.use('/api', clienteRoutes);
app.use('/api', contratoRoutes);
app.use('/api', facturaRoutes);
app.use('/api', pagoRoutes);
app.use('/api', movimientoRoutes);
app.use('/api', ordenRoutes);
app.use('/api', materialRoutes);
app.use('/api', bodegaRoutes);
app.use('/api', departamentoRoutes);
app.use('/api', empleadoRoutes);
app.use('/api', usuarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
