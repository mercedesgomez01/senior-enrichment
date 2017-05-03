'use strict';

var Sequelize = require('sequelize');
var db = require('../index.js');

module.exports = db.define('campuses', {
                    name: { type:Sequelize.STRING,
                            validate: {notNull: true}
                            },
                    email:{ type: Sequelize.STRING,
                            validate: {isEmail: true}
                            },
                    });

