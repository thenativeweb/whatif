#!/usr/bin/env node

'use strict';

const buntstift = require('buntstift'),
      program = require('commander');

const packageJson = require('../package.json'),
      whatIf = require('../lib/whatIf');

program.
  version(packageJson.version).
  description(packageJson.description).
  usage('<package> [options]').
  parse(process.argv);

if (process.argv.length === 2) {
  program.help();

  /* eslint-disable no-process-exit */
  process.exit(0);
  /* eslint-enable no-process-exit */
}

const rootDirectory = process.cwd(),
      updatedPackage = program.args[0].replace(/\/+$/, '');

const packagesToUpdate = whatIf({ updatedPackage, rootDirectory });

if (packagesToUpdate.length === 0) {
  buntstift.success('No packages need to be updated.');

  /* eslint-disable no-process-exit */
  process.exit(0);
  /* eslint-enable no-process-exit */
}

buntstift.success('The following packages need to be updated (in the given order):');
packagesToUpdate.forEach(packageToUpdate => {
  buntstift.list(packageToUpdate);
});
