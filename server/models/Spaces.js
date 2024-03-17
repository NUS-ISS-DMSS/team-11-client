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
      type: DataTypes.TIME,
      allowNull: false,
    },
    operatingHours_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    days_closed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    station: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Spaces;
};
