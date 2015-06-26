describe('GitHubDataService Test', function () {
    beforeEach(module('app'));

    it('should issue a correct GET request to the GitHubService with viri', inject(function (gitHubDataService, $httpBackend) {
        var resp = {name: 'Viridiana'};
        $httpBackend.when('GET', 'https://api.github.com/users/viri').respond(resp);

        var promise = gitHubDataService.get('viri');
        promise.then(function (data) {
            expect(data.data.name).toBe(resp.name);
        });
        $httpBackend.flush();
    }));

    it('should issue an error on a user that does not exists', inject(function (gitHubDataService, $httpBackend) {
        var resp = {message: 'Error'};
        $httpBackend.when('GET', 'https://api.github.com/users/viri').respond(404, resp);

        var promise = gitHubDataService.get('viri');
        promise.catch(function (data) {
            expect(data.data.message).toBe(resp.message);
        });
        $httpBackend.flush();
    }));
});