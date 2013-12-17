define(['application'], function(App) {
    describe('just checking', function(){
        it('works for app', function() {
            console.log(App);
           expect(true).toBe(true);
        });
        it('works for app', function() {
            var el = $('<div></div>');
            expect(el.length).toEqual('require.js up and running');
        });
    });

});