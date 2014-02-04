/**
 * Register all Handlbars helpers
 *
 * @param {Object} Handlebars - Handlebars object
 */
function registerHelpers(Handlebars) {

	/**
	 * uppercase the string
	 */
	Handlebars.registerHelper("toUpperCase", function(value) {
		return (value && typeof value === "string") ? value.toUpperCase() : "";
	});
}

/**
 * Exports.
 */
module.exports = registerHelpers;
