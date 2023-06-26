/*
  Place everything within the curly braces below into a browser console
  The curly braces are important bc it creates a local scope for all code here
  and so you can repeat as needed without have to refresh or delete variables/functions
*/

{
// Get all anchor tags with the id of 'video-title'
const videoLinks = document.querySelectorAll('#video-title');
const videoDuration = document.querySelectorAll('ytd-thumbnail-overlay-time-status-renderer>#text');
const creators = document.querySelectorAll('.ytd-channel-name>a');
const videoInfo = document.querySelectorAll('#video-info');

// Create an array to store the href values
const hrefs = [];

// Iterate over each anchor tag and extract the href value
videoLinks.forEach((tag,index) => {
  const title = tag.innerText;
  const href = tag.href;
  const duration = videoDuration[index].innerText;
  const creator = creators[index].innerText;
  const creatorLink = creators[index].href;
  
  const metadata = videoInfo[index].innerText;
  const parts = metadata.split('•');

  hrefs.push({
    title: title,
    href: href,
    duration: duration,
    creator: creator,
    creatorLink: creatorLink,
    views: parts[0].trim(),
    published: parts[1].trim()
  });
});

// Print the array of hrefs to the console
console.log(hrefs);
}
