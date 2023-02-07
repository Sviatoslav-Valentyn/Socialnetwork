module.exports = (sequelize, DataTypes) => {
    const photos = sequelize.define("photo", {
        ID_Photo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Link: {
            type: DataTypes.STRING(30),
            allowNull: false,
            length:[15,30]
        }
    },{
        timestamps: false
      })
      return photos;
}