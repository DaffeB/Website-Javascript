const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const genres = [{
        "id": 28,
        "name": "ACTION"
    },
    {
        "id": 12,
        "name": "ADVENTURE"
    },
    {
        "id": 16,
        "name": "ANIMATION"
    },
    {
        "id": 35,
        "name": "COMEDY"
    },
    {
        "id": 80,
        "name": "CRIME"
    },
    {
        "id": 99,
        "name": "DOCUMENTARY"
    },
    {
        "id": 18,
        "name": "DRAMA"
    },
    {
        "id": 10751,
        "name": "FAMILY"
    },
    {
        "id": 14,
        "name": "FANTASY"
    },
    {
        "id": 36,
        "name": "HISTORY"
    },
    {
        "id": 27,
        "name": "HORROR"
    },
    {
        "id": 10402,
        "name": "MUSIC"
    },
    {
        "id": 9648,
        "name": "MYSTERY"
    },
    {
        "id": 10749,
        "name": "ROMANCE"
    },
    {
        "id": 878,
        "name": "SCIENCE FICTION"
    },
    {
        "id": 10770,
        "name": "TV MOVIE"
    },
    {
        "id": 53,
        "name": "THRILLER"
    },
    {
        "id": 10752,
        "name": "WAR"
    },
    {
        "id": 37,
        "name": "WESTERN"
    }
]

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = '';
var totalPages = 100;