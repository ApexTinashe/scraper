import puppeteer from "puppeteer";

//const CLI = process.argv.length > 3 ? process.argv[2]:'Zimbabwe';

(async ()=>
{
  const browser = await puppeteer.launch(
    {
      headless:false
    }
  );

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(1800000);
  await page.goto('https://www.youtube.com/@OpenChatsPodcast');

  await page.screenshot({path:'image.jpg'});

  //await page.waitForSelector('#search-input #search', {timeout:1800000});

  //await page.waitForSelector('#search-icon-legacy');

  

  //await page.type('#search-input #search', "Open chats podcast" , {delay:170}, {waitForSelector:true});

  //await page.screenshot({path:'pic.png'})

  //await Promise.all([
    //page.waitForNavigation(), 
    //page.click('#search-icon-legacy'),
  //]);
 
  //await page.waitForSelector("a > #main-link", {timeout:180000}),
  //await page.click("a > #main-link")
   

  //await page.screenshot({path:'another pic.png'});

  const subs = "#subscriber-count";

  await page.waitForSelector(subs, {timeout:180000});

  const vidcount = '#videos-count';

  await page.waitForSelector(vidcount, {timeout:180000});
  
  const result1 = await page.$eval(subs, (el)=>
  {
    return el.innerText
  });

 

  const result2 = await page.$eval(vidcount, (el)=>
    {
      return el.innerText
    });

 
  const title = await page.title();
  const url = await page.url();

  console.log(`Openchats Podcast channnel is currently at ${result1} subscribers with ${result2} videos`);
  console.log(`${title} is being hosted at web address ${url} while it's being controlled by test automation software`);
})();

//user:'tchirenje22@gmail.com ',
//pass:'cait rdfh vyuj tazb'