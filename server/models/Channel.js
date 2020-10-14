const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Channel = sequelize.define(
    "Channel",
    {
      name: DataTypes.STRING,
      public: DataTypes.BOOLEAN,
    },
    { underscored: true }
  );

  return Channel;
};
