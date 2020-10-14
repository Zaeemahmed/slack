const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Team = sequelize.define(
    "Team",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  return Team;
};
