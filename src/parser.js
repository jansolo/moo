module.exports = {
    /**
     * Parse arguments.
     *
     * @param  {string} text
     * @param  {string} argumentName
     * @return {string|null}
     */
    parseArguments: function (text, argumentName) {
        var arguments = text.match(/[^[\]]+(?=])/g);

        if (!arguments) {
            return;
        }

        const arg =  arguments.find(function (arg) {
            return arg.split(' ')[0] === argumentName;
        });

        return arg && arg.substring(argumentName.length).trim();
    },
};
