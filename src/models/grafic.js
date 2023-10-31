const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema del producto
const productSchema = new Schema({
  name: String,  // Nombre del producto
  description: String,  // Descripción del producto
  model: String,  // Modelo del producto
  brand: String,  // Marca del producto
  streamingMultiprocessors: Number,  // Número de Streaming Multiprocessors
  tensorCores: Number,  // Número de Tensor Cores
  rtCores: Number,  // Número de RT Cores
  axialFanDesign: String,  // Características del diseño del ventilador axial
  slotDesign: String,  // Características del diseño de ranura
  technology: String,  // Tecnología del producto
  dualBiosSwitch: String,  // Funcionalidad de interruptor de doble BIOS
  fanBearings: String,  // Tipo de rodamientos del ventilador
  images: [String],  // Matriz de URLs de imágenes del producto
  freeShipping: Boolean,  // Indica si el producto tiene envío gratuito (verdadero/falso)
  price: Number,  // Precio del producto
  stock: Number,  // Cantidad en stock
});

// Crea un modelo de producto basado en el esquema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;