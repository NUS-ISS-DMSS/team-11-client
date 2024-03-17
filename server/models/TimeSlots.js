module.exports = (sequelize, DataTypes) => {
    const Time_slots = sequelize.define("Time_slots", {
      space_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
    return Time_slots;
  };
  