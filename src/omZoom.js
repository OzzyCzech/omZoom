/**
 * There is multiple zoom plugins
 *
 * @see https://github.com/fat/zoom.js/
 * @see https://github.com/spinningarrow/zoom-vanilla.js
 * @see https://github.com/francoischalifour/medium-zoom
 */

import mediumZoom from "medium-zoom";

document.onreadystatechange = function () {
	if (document.readyState == 'complete') {

		const images = [];
		const imagesLinks = document.querySelectorAll('a[href*=".jpg" i], a[href*=".jpeg" i], a[href*=".png" i], a[href*=".gif" i]');

		imagesLinks.forEach((link) => {
			// add data-zoom-src
			const img = link.querySelector('img');
			img.setAttribute('data-zoom-src', link.href);

			// disable clicking
			link.addEventListener('click', (event) => event.preventDefault());

			images.push(img)
		});

		const zoom = mediumZoom(images, {background: 'transparent'});
	}
};