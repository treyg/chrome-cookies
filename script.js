// TODO:
// - Check if cookie exists and change text accordingly
// -- Could also check what type of device user is on
// - Auto hide text after delay instead of click


const changeEnv = () => {
  chrome.cookies.remove({
    name: 'dwsid',
    url: 'https://staging-na-wwwinc.demandware.net/',
  });
  chrome.tabs.reload()
}
changeEnv()