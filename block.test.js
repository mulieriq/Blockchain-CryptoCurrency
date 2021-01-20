const Block = require('./core');

describe('Block', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(Block.genesis(), data);
    });


    it('sets the `data` to match the input', () => {
        expect(block.data).toEqual(data);
    });
    it('Sets the `lastHash` to match the hash of the last  block', () => {
        expect(block.last_hash).toEqual(lastBlock.hash);
    });
});