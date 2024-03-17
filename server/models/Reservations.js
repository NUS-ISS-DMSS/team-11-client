module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define("Reservations", {
    space_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timeslot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reservation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Reservations;
};
