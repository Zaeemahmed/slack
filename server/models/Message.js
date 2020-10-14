const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Message = sequelize.define(
    "Message",
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { underscored: true }
  );

  return Message;
};
