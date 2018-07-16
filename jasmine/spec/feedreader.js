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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            //Check if array allFeeds is defined and also check if has at leat 1 value
            expect(allFeeds).toBeDefined();            
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('test 8 feed has url', function() {
             //Check if url key is defined and also check if has some value in url parameter
             allFeeds.forEach(function (item){
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);
             });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('test 9 feed has name', function (){
             allFeeds.forEach(function (item){
                 //Check if name key is defined and also check if has some value in name parameter
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);    
             });
         });

});
    /* TODO: Write a new test suite named "The menu" */
     
    //ITEM 10
    describe('The Menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('test 11 menu is hidden', function(){                            
            //check if body has "menu-hidden"
            //this class will hidden the side menu on page load
            expect($("body").hasClass("menu-hidden")).toBe(true);        
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('teste 12.1 display menu on click', function (){
            //do a virtual click on "MENU DISPLAY" that will remove menu-hidden class and will show the side menu
            $('a.menu-icon-link').trigger('click');
            expect($("body").hasClass("menu-hidden")).toBe(false);   
        });
   
        it('teste 12.2 hide menu on click', function(){
            //do a virtual click on "MENU DISPLAY" and check if menu-hidden class will hide the side menu
            $('a.menu-icon-link').trigger('click');
            expect($("body").hasClass("menu-hidden")).toBe(true); 
        });

});         
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    //ITEM 13    
    describe('Initial Entries', function(){

        beforeEach(function(done) {            
              loadFeed(0 , function (){
                  done();                  
              });              
            });
            
        it('test 14.1 has feed container', function(done) {            
             expect($(".feed").length).toBeGreaterThan(0);                   
             done();
        });

        it('test 14.2 has entries on feed', function(done) {            
            expect($(".entry").length).toBeGreaterThan(0);          
            done();
        });           
    });    

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    
    //ITEM 15
    describe("New Feed Selection", function(){
        
      let firstFeed = $('.feed').html(); 
        
      beforeEach(function (done){
          loadFeed(0 , function(){
            //Load the items from the first feed and save the info into firstFeed variable
            firstFeed = $('.feed').html();
            //after load the second feed on the list to compare and check if will be load on click
            loadFeed(1, function(){
                done();
            });
          });
         });

      it("test 16.1 variables are defined", function(done){
        expect(firstFeed).toBeDefined(); 
        done();
      });    

       it("test 161.1 check if load a new feed", function(done){
        expect($('.feed').html()).not.toEqual(firstFeed);
        done();
       });

    });

    //ITEM 19 - Implement error handling for undefined variables and out-of-bound array access
    //I guess i didn´t understand this test. What variable should i check if is defined? 

}());
