const movieTheater = require('./03. Movie Theater');
let expect = require('chai').expect;

describe('movie theatre', () => {
    it('tests functionality ageRestrictions(movieRating)', () => {
        expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        expect(movieTheater.ageRestrictions('45')).to.equal(`There are no age restrictions for this movie`)
    });

    it('tests functionality moneySpent(tickets, food, drinks)', () => {
        expect(() => { movieTheater.moneySpent('2', ['Nachos', 'Popcorn'], ['Soda', 'Water']) }).to.throw("Invalid input");
        expect(() => { movieTheater.moneySpent(2,'Nachos', ['Soda', 'Water']) }).to.throw("Invalid input");
        expect(() => { movieTheater.moneySpent(2, ['Nachos', 'Popcorn'],'Soda') }).to.throw("Invalid input");

        expect(movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal(`The total cost for the purchase is 44.50`);
        expect(movieTheater.moneySpent(2, ['Nachos', 'Popcorn', 'Pizza'], ['Soda', 'Water', 'Juice'])).to.equal(`The total cost for the purchase is 44.50`);
        expect(movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 59.60');
    });

    it('tests functionality reservation(rowsArray, neededSeatsCount)', () => {
        expect(() => { movieTheater.reservation({ rowNumber: 1, freeSeats: 2 }, 4) }).to.throw("Invalid input");
        expect(() => { movieTheater.reservation([{ rowNumber: 1, freeSeats: 2 },{ rowNumber: 2, freeSeats: 2 }], '4') }).to.throw("Invalid input");
        
        expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 4 },{ rowNumber: 2, freeSeats: 6 }], 4)).to.equal(2);
    });
});
