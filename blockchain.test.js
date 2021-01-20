//importing the Block chain
const Blockchain = require('./blockchain');
//importing the Block
const Block = require('./core');

describe('Blockchain', () => {
    let bc;
    beforeEach(() => {
        bc = new Blockchain();
    });

    it('starts with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis())
    });
    it('it adds a new block ', () => {
        const data = 'foo';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
    });
});