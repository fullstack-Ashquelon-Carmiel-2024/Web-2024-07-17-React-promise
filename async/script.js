const inpMovie = document.querySelector('#inp-movie');
const btnMovie = document.querySelector('#btn-movie');
const resMovie = document.querySelector('#inp-movie ~ .result');

const getResult = (url,options, whereToPut,checkRes,resultName,errName) => {
    console.log(url)
    fetch(url,options)
      .then(response => response.json())
      .then(response => {
        
        if (response[checkRes]==='True') {
            console.log(response[resultName])
            const newUl = document.createElement('ul');
            whereToPut.append(newUl);
            response[resultName].forEach(movie => {
                console.log(movie)
                let newLi = document.createElement('li');
                newLi.innerText = movie.Title + ', ' + movie.Year;
                if (movie.Poster !== 'N/A') {
                    const newImg = document.createElement('img');
                    newImg.src = movie.Poster;
                    newLi.append(newImg);
                }
                newUl.append(newLi);
            })
        } else {
            console.log(response[errName])
            whereToPut.innerText = response[errName]
        }
      })
      .catch(err => {
        console.log(err.message)
        console.log(err)
    })

}

btnMovie.addEventListener('click',() => {

    let str = inpMovie.value;
    let url = `https://movie-database-alternative.p.rapidapi.com/?s=${str}&r=json`;
    getResult(url,altMovieDBOptions,resMovie,'Response','Search','Error');
})