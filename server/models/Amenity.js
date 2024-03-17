module.exports = (sequelize, DataTypes) => {
    const Amenity = sequelize.define("Amenity", {
      amenity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Amenity;
  };
  