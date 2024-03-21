'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Client_Masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cname: {
        type: Sequelize.STRING
      },
      cphone: {
        type: Sequelize.STRING
      },
      cemail: {
        type: Sequelize.STRING
      },
      caddress1: {
        type: Sequelize.STRING
      },
      caddress2: {
        type: Sequelize.STRING
      },
      caddress3: {
        type: Sequelize.STRING
      },
      cpincode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Client_Masters');
  }
};