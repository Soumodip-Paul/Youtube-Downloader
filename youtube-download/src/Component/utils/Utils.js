/**
 * Set the title of current page
 * Leave _title_ blank  for default
*/
export const setTitle = (title) => {
    document.title = (title === undefined || !title ? "" : title + " - " ) +  "SpTube Youtube Downloader"
}