const interface = require('./interface')
const util = require('util')

const moduleName = interface();

try {
    const moduleToInspect = require(moduleName);
    console.log(util.inspect(moduleToInspect, { colors: true }));
} catch (error) {
    console.error(`Unable to inspect module ${moduleName} queen.`);
    console.error(`Reason queen: ${error.message}`);
    process.exitCode = 1;
}
