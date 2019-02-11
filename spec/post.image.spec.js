const { THUMBOR_ENDPOINT } = require( '../src/env' );
const { promises: fs } = require( 'fs' );
const unirest = require( 'unirest' );
const { resolve } = require( 'path' );


describe( 'POST {thumbor}/image', () =>
{

    it( 'retuns no error', async ( done ) =>
    {
        unirest.post( `${ THUMBOR_ENDPOINT }/image` )
            .headers({
                "cache-control": "no-cache",
                'content-type': 'image/png',
                // "Postman-Token": "e1021ab8-8bf2-44d9-ab81-d708c4515f17",
                body: await fs.readFile( resolve( __dirname, './fs/image.png' ), 'UTF8' ),
            })
            .end( ( response, error ) =>
            {
                return done( error );
            });
    });

});
