'use strict';

const getDependencies = require('./getDependencies'),
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
  const dependencies = getDependencies(rootDirectory);

  Reflect.deleteProperty(dependencies, updatedPackage);

  const packagesToUpdate = resolveDependencies({ dependencies, updatedPackage });

  return packagesToUpdate;
};

module.exports = whatIf;
