# whatif

whatif discovers dependencies that need to be updated after updating a package.

## Installation

```bash
$ npm install -g whatif
```

## Quick start

From time to time, if you update a package, you also need to update any dependant packages, and any dependant packages of the dependant packages, and… it's turtles all the way down.

To simplify this task you can run whatif within the directory that contains all of your repositories. Provide the name of an updated package as a parameter:

```bash
$ whatif <package>
```

As a result `reqd` will give you a list of all packages where the given package is either referenced as a `dependency` or as a `devDependency` in the appropriate `package.json` file.

Please note that if you use tab completion, the package name may have a trailing slash accidentally. whatif will remove it automatically, so it's perfectly fine to run

```bash
$ whatif lodash/
```

instead of the following command.

```bash
$ whatif lodash
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```bash
$ bot
```

## License

The MIT License (MIT)
Copyright (c) 2016 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
