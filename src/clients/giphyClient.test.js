import {performSearch, performTrending} from './giphyClient.js';
//import nock from 'nock';

it('performs a search', (done) => {
/*
    var scope = nock('https://api.giphy.com')
        .get('')
        .reply(200, 'Data!')
        .log(console.log); //TODO clearly something missing: 
                           // matching https://api.giphy.com:443 to GET https://api.giphy.com:443: false`
    
       // console.log(scope.activeMocks());
*/
  performSearch('pants', 2, (parseData) => {
    expect(parseData).not.toBe(null);
    expect(parseData).not.toBe(undefined);
    done();
  });
}, 8000);

it('performs call for trending gifs', (done) => {
  var expectedDate = new Date();
  performTrending((data) => {  
    let actualDate = new Date(data[0].trending_datetime);

    expect(actualDate.getDate()).toBe(expectedDate.getDate());
    expect(actualDate.getDay()).toBe(expectedDate.getDay());
    expect(actualDate.getFullYear()).toBe(expectedDate.getFullYear());
    done();
  });
}, 8000);
