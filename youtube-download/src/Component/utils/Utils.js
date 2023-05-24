/**
 * Set the title of current page
 * Leave _title_ blank  for default
*/
export const setTitle = (title) => {
    document.title = (title === undefined || !title ? "" : title + " | " ) +  process.env.REACT_APP_APP_NAME + " Youtube Downloader"
}

export const setDescription = _desc => {
    document.querySelector('meta[name="description"]').setAttribute("content", _desc);
}

export const stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body.innerHTML;
};
