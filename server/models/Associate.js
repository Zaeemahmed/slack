const associate = (sequelize) => {
  const { User, Team, Channel, Message } = sequelize.models;

  Team.belongsTo(User, {
    foreignKey: {
      name: "owner",
    },
  });

  Message.belongsTo(Channel, {
    foreignKey: {
      name: "channelId",
      field: "channel_id",
    },
  });

  Message.belongsTo(User, {
    foreignKey: {
      name: "userId",
      field: "user_id",
    },
  });

  Channel.belongsTo(Team, {
    foreignKey: {
      name: "teamId",
      field: "team_id",
    },
  });

  Team.belongsToMany(User, {
    through: "Members",
    foreignKey: {
      name: "teamId",
      field: "team_id",
    },
  });
  User.belongsToMany(Team, {
    through: "Members",
    foreignKey: {
      name: "channelId",
      field: "channel_id",
    },
  });

  User.belongsToMany(Channel, {
    through: "ChannelMembers",
    foreignKey: {
      name: "userId",
      field: "user_id",
    },
  });
  Channel.belongsToMany(User, {
    through: "ChannelMembers",
    foreignKey: {
      name: "channelId",
      field: "channel_id",
    },
  });
};

module.exports = { associate };
