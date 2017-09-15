
import request from 'request';
import url from 'url'

const search = {
    protocol: 'https',
    host: 'api.giphy.com',
    pathname: '/v1/gifs/search',
    query: {
        api_key: '9a002efdbf2e43588eb1b9366df5ab05',
        q: '',
        limit: '25',
        offset: '',
        rating: 'G',
        lang: 'en'
    }
};

function performSearch(term, page) {
    search.query.q = term;
    search.query.offset = page * search.query.limit;
    
    request(url.format(search), (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(res);
        return res;
    });
}

const trending = {
    protocol: 'https',
    host: 'api.giphy.com',
    pathname: '/v1/gifs/trending',
    query: {
        api_key: '9a002efdbf2e43588eb1b9366df5ab05',
        limit: '25',
        rating: 'G'
    }
};

function performTrending() {
    request(url.format(trending), (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(res);
        return res;
    });
}

module.exports = {
    performSearch: performSearch,
    performTrending: performTrending 
}