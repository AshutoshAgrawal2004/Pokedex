//https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
export const toTitleCase = str => {
	return str.replace(/\w\S*/g, txt => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
export const parseId = url => url.substring(34, url.length - 1);
