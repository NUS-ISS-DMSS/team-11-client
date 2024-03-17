module.exports = (sequelize, DataTypes) => {
  const Space_amenity = sequelize.define("Space_amenity", {
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amenity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Space_amenity;
};
