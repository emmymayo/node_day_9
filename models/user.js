module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
      "location",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: DataTypes.STRING,
        created_at: DataTypes.DATEONLY,
        updated_at: DataTypes.DATE,
      },
      {
        timestamps: true,
        freezeTableName: true,
        tableName: "user",
      },
      {
        underscoredAll: false,
        underscored: false,
      }
    );
  
    return user;
  };