'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const delPromo = document.querySelector('.promo__adv-title'),
          delPromo1 = document.querySelectorAll('.promo__adv img'),
          genreParent = document.querySelector('.promo__bg'),
          genre = genreParent.querySelector('.promo__genre'),
          moviesBox = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          filmInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
          
          
    const makeChanges = () => {
        genre.textContent = 'драма';
        genreParent.style.backgroundImage = 'url("img/bg.jpg")';
        delPromo.remove();
    };
    makeChanges();


    const sortArr = (arr) => {
        arr.sort();
    };
    


    function writeNewFilms() {

        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
    
              let  newFilm = filmInput.value;
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 21)}...`;
            }
              const favorite = checkbox.checked;
            if (favorite) {
                console.log('favorite');
            }

            if (newFilm) {
                movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            moviesBox.innerHTML = '';
            writeFilms(movieDB.movies, moviesBox);
            filmInput.value = '';
            }
            
        });
    }
    writeNewFilms();
          
    
    const delAdvent = (arr) => {
     
        arr.forEach(i => {
            i.remove();
        });
    };
    delAdvent(delPromo1);
    
    
    const writeFilms = (films, movieList) => {
          moviesBox.innerHTML = "";
          sortArr(films);
        films.forEach((movi, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${movi}
                    <div class="delete"></div>
                </li>
            `;
        });

        moviesBox.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                writeFilms(films, movieList);
            });
        });
    };
    writeFilms(movieDB.movies, moviesBox);
    
    

});

