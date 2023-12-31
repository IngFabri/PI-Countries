const {DataTypes} = require("sequelize")

module.exports=(sequelize)=> {
    sequelize.define("Activity", {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        difficulty:{
            allowNull: false,
            type: DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            }
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        season:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull:false
        }
    },{
        timestamps: false
    })
}