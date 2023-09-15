 const baseElement = (fetchedDoc) => {
   return fetchedDoc.querySelector('.ipc-metadata-list.ipc-metadata-list--dividers-between.sc-3f13560f-0.sTTRj.compact-list-view.ipc-metadata-list--base')
}

 const movieName = (element) => {
    return [...element.querySelectorAll("li h3.ipc-title__text")].map((list) => list.textContent.replace(/\s+/g, " ").trim())
}

 const movieYearAndHour = (element) => {
   return [...element.querySelectorAll(".cli-title-metadata")].map((list) => {
        const [year, hour] = list.querySelectorAll("span:first-child,span:nth-child(2)")
                return {
               year: year !== undefined ? year.textContent.trim() : "",
               hour: hour !== undefined ? hour.textContent.trim() : "" 
           }
      })
}

 const movieRate = (element) =>{
   return [...element.querySelectorAll("[data-testid='ratingGroup--container']")].map((list) => {
        return list.textContent
    })
}
const movieImg = (element) => {
    return [...element.querySelectorAll("img")].map((list) => {
        return list.src
    })
}

exports.scrapeDatas = (fetchedDoc) => {
    const list = baseElement(fetchedDoc);
    const names = movieName(list);
    const yearAndHour = movieYearAndHour(list)
    const rates = movieRate(list);
    const imgSrc = movieImg(list)

    let movies = []
    for (let i = 0; i < names.length; i++) {
        movies.push({
          name: names[i],
          duration: yearAndHour[i],
          rate: rates[i],
          img: imgSrc[i]
        });
      }
      return movies
}
