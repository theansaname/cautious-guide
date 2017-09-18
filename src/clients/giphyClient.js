
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

export function performSearch(term, page, cb) {
  search.query.q = term;
  search.query.offset = page * search.query.limit;
    
  request(url.format(search), (err, res, body) => {
    if (err) {
      console.log(err);
    }
    
    if (cb) {
      cb(JSON.parse(body).data);
    }
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

export function performTrending(cb) {
  request(url.format(trending), (err, res, body) => {
    if (err) {
      //TODO do more :p
      console.log(err); 
    }

    if (cb) {
      cb(JSON.parse(body).data);
    }
  });
}