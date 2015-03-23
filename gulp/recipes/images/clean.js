var del    = require('del');
var config = require('../../config/images');


/**
 * Delete all images
 * within the built theme's
 * asset directory
 *
 */
module.exports = function (done) {
	del(config.paths.clean, { force: true }, done);
};