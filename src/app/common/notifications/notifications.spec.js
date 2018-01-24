describe('login route', function() {
    'use strict';

    var $httpBackend, $q, $state, $templateCache, $location;

    var tweetServiceMock = jasmine.createSpyObj('TweetService', [
        'getTweets'
    ]);

    function mockServices($provide) {
        $provide.factory('TweetService', function() {
            return tweetServiceMock;
        });
    }

    function services($injector) {
        $q = $injector.get('$q');
        $state = $injector.get('$state');
        $httpBackend = $injector.get('$httpBackend');
        $templateCache = $injector.get('$templateCache');
        $location = $injector.get('$location');
    }

    function setUp() {
        $httpBackend.whenGET(/assets\/(.+)/).respond(200, {});
    }

    beforeEach(function() {
        module('app', mockServices);
        inject(services);
        setUp();
    });

    describe('when navigating to `/`', function() {
        function goTo(url) {
            $location.url(url);
            $httpBackend.flush();
        }

        beforeEach(function() {
            tweetServiceMock.getTweets.and.returnValue($q.resolve([]));
        });

        describe('and user is logged in', function() {
            it('redirects to the home state', function() {
                $location.url('/notifications');

                expect(tweetServiceMock.getTweets).toHaveBeenCalled();
                expect($state.current.name).toBe('notifications');
            });
        });
    });
});
