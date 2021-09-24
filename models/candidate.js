'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const Candidate = sequelize.define(
  'candidates',
  {
    candidateId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNUll: false
    },
    candidateName: {
      type: DataTypes.STRING,
      allowNUll: false
    },
    scheduleId: {
      type: DataTypes.UUID,
      allowNUll: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      {
        fields: ['scheduleId']
      }
    ]
  }
);

module.exports = Candidate;