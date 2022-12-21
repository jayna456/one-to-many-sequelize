"use strict";

const tutorial = require("../models/tutorial");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn("comments", "tutorialId", {
      type: Sequelize.INTEGER,
      after: "text",
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("comments", "tutorialId");
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
