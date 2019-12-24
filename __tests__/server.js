const server = require('../config/server');

describe('Web server test', function()
{
    it('#start()', function() {
        expect(server.start()).toBe(true);
    });

    it('#stop()', function() {
        expect(server.stop()).toBe(true);
    })
});