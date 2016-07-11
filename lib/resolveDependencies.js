'use strict';

const toposort = require('toposort');

const resolveDependencies = function (options) {
  if (!options) {
    throw new Error('Options are missing.');
  }
  if (!options.dependencies) {
    throw new Error('Dependencies are missing.');
  }
  if (!options.updatedPackage) {
    throw new Error('Updated package is missing.');
  }

  const { dependencies, updatedPackage } = options;

  const updatedPackages = [ updatedPackage ],
        updatePaths = [];

  while (updatedPackages.length > 0) {
    const nextUpdatedPackage = updatedPackages.shift();

    Object.keys(dependencies).forEach(packageName => {
      if (dependencies[packageName].includes(nextUpdatedPackage)) {
        updatePaths.push([ packageName, nextUpdatedPackage ]);
        updatedPackages.push(packageName);
      }
    });
  }

  const packagesToUpdate = toposort(updatePaths).reverse();

  // The package toposort includes the initial package, too. Since we expect
  // that the user had already updated that one, hence we remove it here to
  // remove unneeded output.
  packagesToUpdate.shift();

  return packagesToUpdate;
};

module.exports = resolveDependencies;
