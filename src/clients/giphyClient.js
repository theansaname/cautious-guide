
import request from 'request';

const api_key = '';
const giphy_host = 'https://api.giphy.com';
const gihpy_api_route = '/v1/gifs';
const search_route = '/search';

const search_query = {
    q: '',
    limit: '25',
    offset: '',
    rating: 'G',
    lang: 'en'
}

function searchURL() {
    return new URL(gihpy_api_route + search_route, giphy_host);
}

function search(term, page) {
    search_query.q = term;
    search_query.offset = page * search_query.limit;
    



}



module.exports = {
    searchURL: searchURL
}