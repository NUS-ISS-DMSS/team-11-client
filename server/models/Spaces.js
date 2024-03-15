module.exports = (sequelize, DataTypes) => {
  const Spaces = sequelize.define("Spaces", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operatingHours_start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operatingHours_end: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    daysClosed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    station: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keywords: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Spaces;
};
