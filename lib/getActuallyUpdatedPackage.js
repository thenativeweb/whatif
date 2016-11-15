'use strict';

const fs = require('fs'),
      path = require('path');

const getActuallyUpdatedPackage = function (rootDirectory, updatedPackage) {
  const directoryFullyQualified = path.join(rootDirectory, updatedPackage);

  /* eslint-disable no-sync */
  if (!fs.existsSync(directoryFullyQualified)) {
    /* eslint-enable no-sync */
    return updatedPackage;
  }

  /* eslint-disable no-sync */
  if (!fs.statSync(directoryFullyQualified).isDirectory()) {
    /* eslint-enable no-sync */
    return updatedPackage;
  }

  const packageJsonFullyQualified = path.join(directoryFullyQualified, 'package.json');

  /* eslint-disable no-sync */
  if (!fs.existsSync(packageJsonFullyQualified)) {
    /* eslint-enable no-sync */
    return updatedPackage;
  }

  /* eslint-disable no-sync */
  if (!fs.statSync(packageJsonFullyQualified).isFile()) {
    /* eslint-enable no-sync */
    return updatedPackage;
  }

  /* eslint-disable global-require */
  const packageJson = require(packageJsonFullyQualified);
  /* eslint-enable global-require */

  return packageJson.name;
};

module.exports = getActuallyUpdatedPackage;
