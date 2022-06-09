#! /usr/bin/env node
const inquirer = require('inquirer');
const { renameMovieFiles } = require('./rename-movies');
const { renameSeries } = require('./rename-series');

(async () => {
  const { type } = await inquirer.prompt({
    type: 'input',
    name: 'type',
    message: `Select task (1 or 2):
      1. Rename media files
    `,
  });
  switch (type) {
    case '1':
      const { folderPath, contentType } = await inquirer.prompt([
        {
          type: 'input',
          name: 'folderPath',
          message: `Input folder path`,
        },
        {
          type: 'input',
          name: 'contentType',
          message: `Movies (1) or TV (2)`,
        }
      ]);
      if (contentType === '1') {
        await renameMovieFiles(folderPath)
      }
      if (contentType === '2') {
        await renameSeries(folderPath)
      }
      break;
    case '2':
      break;
  }
})()

