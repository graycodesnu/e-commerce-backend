// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// TODO: Go through the onDelete relationships. Use 'CASCADE'

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',

});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',

}),
// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, {
  foreignKey: 'category_id',

}),
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'category_id',

}),
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
