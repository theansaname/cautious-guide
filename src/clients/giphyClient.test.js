import giphyClient from './giphyClient.js';
import nock from 'nock';

it.only('', (done) => {

    var scope = nock('https://api.giphy.com')
        .get('')
        .reply(200, 'Data!')
        .log(console.log); //TODO clearly something missing: 
                           // matching https://api.giphy.com:443 to GET https://api.giphy.com:443: false`
    
       // console.log(scope.activeMocks());

    giphyClient.performSearch('pants', 2);
    
    setTimeout( function () { //TODO remove me
        done();
    }, 5000);
}, 8000);


it('', (done) => {
    var body = giphyClient.performTrending();
    
    setTimeout( function () {
        done();
    }, 5000);
}, 8000);
