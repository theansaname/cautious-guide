import {performSearch, performTrending} from './giphyClient.js';
import nock from 'nock';

it('', (done) => {
/*
    var scope = nock('https://api.giphy.com')
        .get('')
        .reply(200, 'Data!')
        .log(console.log); //TODO clearly something missing: 
                           // matching https://api.giphy.com:443 to GET https://api.giphy.com:443: false`
    
       // console.log(scope.activeMocks());
*/
    performSearch('pants', 2, (parseData) => {
          //console.log(parseData);
        done();
    });
}, 8000);



it('', (done) => {
    var currentDate = new Date();
    performTrending((data) => {



        console.log(data);
        console.log('------------------');
        console.log(data[0].trending_datetime);

        done();
    });
}, 8000);
