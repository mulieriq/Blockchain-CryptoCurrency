//block import
const Block = require('./core');
const Blc = require('./blockchain')
//const block = new Block('foo', 'bar', 'zoo', 'bar');
//console.log(block.toString());
//console.log(Block.genesis().toString());
for(i = 0 ; i < 10 ; i ++){
   // const min1 = Block.mineBlock(Block.genesis(),'foo');
    const blc = Blc.addBlock('muli')
    console.log(min1.toString());
}