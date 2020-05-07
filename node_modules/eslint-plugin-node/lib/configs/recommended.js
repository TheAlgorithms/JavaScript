"use strict"

const getPackageJson = require("../util/get-package-json")
const moduleConfig = require("./recommended-module")
const scriptConfig = require("./recommended-script")

module.exports = () => {
    const packageJson = getPackageJson()
    const isModule = (packageJson && packageJson.type) === "module"

    return {
        ...(isModule ? moduleConfig : scriptConfig),
        overrides: [
            { files: ["*.cjs", ".*.cjs"], ...scriptConfig },
            { files: ["*.mjs", ".*.mjs"], ...moduleConfig },
        ],
    }
}
