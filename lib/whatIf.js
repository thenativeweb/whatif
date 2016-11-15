'use strict';

const getActuallyUpdatedPackage = require('./getActuallyUpdatedPackage'),
      getDependencies = require('./getDependencies'),
      resolveDependencies = require('./resolveDependencies');

const whatIf = function (options) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.rootDirectory) {
    throw new Error('Root directory is missing.');
  }
  if (!options.updatedPackage) {
    throw new Error('Updated package is missing.');
  }

  const { rootDirectory, updatedPackage } = options;

  const actuallyUpdatedPackage = getActuallyUpdatedPackage(rootDirectory, updatedPackage);

  const dependencies = getDependencies(rootDirectory);

  Reflect.deleteProperty(dependencies, actuallyUpdatedPackage);

  const packagesToUpdate = resolveDependencies({ dependencies, updatedPackage: actuallyUpdatedPackage });

  return packagesToUpdate;
};

module.exports = whatIf;
