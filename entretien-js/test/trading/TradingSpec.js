
// Etant donné le modèle fourni que vous pourrez enrichir et la liste de transactions fournie

// 1 : Coder une méthode qui retourne le classement des traders par volume total de transaction toutes années confondues
// -> le premier est celui qui a effectué le plus gros volume de transactions, etc.
// -> chaque entrée du classement doit comporter le nom du trader + la somme total de ses transactions

describe('Trading test suite', () => {

    function given_transactions() {
        let raoul = new Trader("Raoul", "Cambridge");
        let mario = new Trader("Mario", "Milan");
        let alan = new Trader("Alan", "Cambridge");
        let brian = new Trader("Brian", "Cambridge");
        let john = new Trader("John", "Hong-Kong");

        return [
            new Transaction(mario, 2013, 300),
            new Transaction(raoul, 2011, 400),
            new Transaction(raoul, 2012, 1000),
            new Transaction(mario, 2011, 710),
            new Transaction(alan, 2013, 400),
            new Transaction(mario, 2012, 700),
            new Transaction(alan, 2012, 950),
            new Transaction(brian, 2011, 300),
            new Transaction(brian, 2013, 600),
            new Transaction(john, 2011, 400),
            new Transaction(raoul, 2013, 100)
        ];
    }

    it('should be true', () => {
        expect(1).toBe(1);
    });

});

