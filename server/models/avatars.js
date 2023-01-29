module.exports = (sequelize, DataTypes) => {
    const avatars = sequelize.define("avatar", {
        ID_Avatar: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Link: {
            type: DataTypes.STRING(30),
            allowNull: false,
            length:[15,30]
        },
        
    },{
        timestamps: false
      })
      return avatars;
}