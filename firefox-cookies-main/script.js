// TODO:
// - Check if cookie exists and change text accordingly
// -- Could also check what type of device user is on
// - Auto hide text after delay instead of click


const changeEnv = () => {
  browser.cookies.remove({
    name: 'dwsid',
    url: 'https://staging-na-wwwinc.demandware.net/',
  });
  browser.tabs.reload()
}
changeEnv()