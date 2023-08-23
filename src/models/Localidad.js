const {sequelize, DataTypes} = require('../db');
// 'use strict';

const {Departamento} = require('./Departamento');
const Localidad = sequelize.define('Localidad',{
    idLocalidad:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type: DataTypes.STRING,
    },
    Departamento_idDepartamento:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'Departamento',
            key:'idDepartamento'
        }
    }
},{
    sequelize,
    paranoid:true,
    modelName: 'Localidad',
    tableName: 'localidad'
})
Localidad.sync();


module.exports = Localidad;