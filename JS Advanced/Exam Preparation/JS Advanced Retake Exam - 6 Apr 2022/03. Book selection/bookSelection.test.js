const bookSelection = require('./bookSelection');
let expect = require('chai').expect;

describe('Task Book Selection', () => {
    it('Tests for isGenreSuitable (genre, age) always valid inputs', () => {
        expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);

        expect(bookSelection.isGenreSuitable('Comedy', 10)).to.equal(`Those books are suitable`);
        expect(bookSelection.isGenreSuitable('Comedy', 13)).to.equal(`Those books are suitable`);
    });

    it('Tests for isItAffordable(price, budget) need for validating the input', () => {
        expect(() => {bookSelection.isItAffordable('10', 20)}).to.throw("Invalid input");
        expect(() => {bookSelection.isItAffordable(10, '20')}).to.throw("Invalid input");
        
        expect(bookSelection.isItAffordable(20, 10)).to.equal("You don't have enough money");
        expect(bookSelection.isItAffordable(10, 20)).to.equal(`Book bought. You have 10$ left`);
    });

    it('Tests for suitableTitles(array, wantedGenre) need for validating the input', () => {
        //array format [{title: 'Happy Day', genre: 'Comedy'}]
        expect(() => {bookSelection.suitableTitles('array', 'Comedy')}).to.throw("Invalid input");
        expect(() => {bookSelection.suitableTitles(['something'], 20)}).to.throw("Invalid input");

        expect(bookSelection.suitableTitles([
            {title: 'Happy Day', genre: 'Comedy'},
            {title: 'Horror Story', genre: 'Horror'},
            {title: 'Reunion', genre: 'Comedy'}], 'Comedy')).to.deep.equal([ 'Happy Day', 'Reunion' ]);

    });
})