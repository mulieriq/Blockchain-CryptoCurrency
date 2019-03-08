//block import
const Block = require('./core');
//const block = new Block('foo', 'bar', 'zoo', 'bar');
//console.log(block.toString());
//console.log(Block.genesis().toString());
for(i = 0 ; i < 10 ; i ++){
    const min1 = Block.mineBlock(Block.genesis(),'foo');
    console.log(min1.toString());
}