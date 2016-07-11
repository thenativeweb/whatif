'use strict';

const fs = require('fs'),
      path = require('path');

const _ = require('lodash');

const getDependencies = function (rootDirectory) {
  if (!rootDirectory) {
    throw new Error('Root directory is missing.');
  }

  const dependencies = {};

  /* eslint-disable no-sync */
  const directories = fs.readdirSync(rootDirectory);
  /* eslint-enable no-sync */

  directories.forEach(directory => {
    const directoryFullyQualified = path.join(rootDirectory, directory);

    /* eslint-disable no-sync */
    if (!fs.statSync(directoryFullyQualified).isDirectory()) {
      /* eslint-enable no-sync */
      return;
    }

    const packageJsonFullyQualified = path.join(directoryFullyQualified, 'package.json');

    /* eslint-disable no-sync */
    if (!fs.existsSync(packageJsonFullyQualified)) {
      /* eslint-enable no-sync */
      return;
    }

    /* eslint-disable global-require */
    const packageJson = require(packageJsonFullyQualified);
    /* eslint-enable global-require */

    if (!packageJson.dependencies) {
      return;
    }

    let dependencyNames,
        devDependencyNames;

    if (packageJson.dependencies) {
      dependencyNames = Object.keys(packageJson.dependencies);
    }
    if (packageJson.devDpendencies) {
      devDependencyNames = Object.keys(packageJson.devDependencies);
    }

    if (!dependencyNames && !devDependencyNames) {
      return;
    }

    dependencies[directory] = _.union(dependencyNames, devDependencyNames);
  });

  return dependencies;
};

module.exports = getDependencies;
