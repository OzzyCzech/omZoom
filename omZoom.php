<?php
/**
 * Plugin Name: omZoom
 * Plugin URI: https://ozana.cz
 * Description: Medium like zoom image plugin
 * Version: 6.0
 * Author: Roman Ožana
 * Author URI: https://ozana.cz/
 */

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_script(
			'omZoom',
			plugins_url('dist/omZoom.js', __FILE__),
			[],
			filemtime(plugin_dir_path(__FILE__) . '/dist/omZoom.js'),
			true
		);
	}
);