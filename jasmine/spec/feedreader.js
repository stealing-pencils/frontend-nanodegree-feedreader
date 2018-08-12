/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.*/
         it('each feed has a defined URL', function() {
           for(var i = 0; i < allFeeds.length; i++) {
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url.length).not.toBe(0);
           }
         });

        /* test that loops through each feed
        * in the allFeeds object and ensures it has a name defined
        * and that the name is not empty. */
        it('each feed has a defined name', function() {
          for(var i = 0; i < allFeeds.length; i ++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
          }
        });

    });


    describe('The menu', function() {
        /* ensures the menu element is hidden by default*/
         it('menu is hidden', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
         })

         /* ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.*/
          it('menu visibility changes on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    describe('Initial Entries', function(){
        var feed = $('.feed');
        /* ensures when the loadFeed function is called and completes its work */
         beforeEach(function(done) {
           loadFeed(0, done);
         });

         it('loadFeed completes its work', function() {
           expect(feed.children.length).toBeGreaterThan(0);
           console.log(feed.children.length);
         });
    });

    describe('New Feed Selection', function(){
        var feed = $('.feed');
        var feedArray = [];
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.*/
         beforeEach(function(done) {
           loadFeed(0);
            var feedOne = feed[0].innerText;
            feedArray.push(feedOne);
            loadFeed(1,done);
        });

        it('new content in reloaded Feed', function() {
          var feedTwo = feed[0].innerText;
          feedArray.push(feedTwo);
          expect(feedArray[0]).not.toContain(feedArray[1]);
          console.log(feedArray[0]);
          console.log(feedArray[1]);
        });

   });

}());
