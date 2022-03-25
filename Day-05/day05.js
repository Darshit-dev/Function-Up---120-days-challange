/** @format */

//project is to do underline ,bold ,italic in content
function boldme() {
	document.getElementById('test').innerHTML =
		'<strong>' + document.getElementById('test').innerHTML + '</strong>'
}
//strong keyword para ke pahele addd hoga ki pura contanr replace kar dega?
function italicme() {
	document.getElementById('test').innerHTML =
		'<em>' + document.getElementById('test').innerHTML + '</em>'
}
function underlineme() {
	document.getElementById('test').innerHTML =
		'<u>' + document.getElementById('test').innerHTML + '</u>'
}
