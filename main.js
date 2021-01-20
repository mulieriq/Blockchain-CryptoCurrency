//block import
const Block = require('./core');
//const block = new Block('foo', 'bar', 'zoo', 'bar');
//console.log(block.toString());
//console.log(Block.genesis().toString());
let bc = [Block.genesis()]
for(i = 0 ; i < 10 ; i ++){
    const min1 = Block.mineBlock(bc[bc.length-1],`foo ${i}`);
    bc.push(min1)
    console.log(bc[i].toString());
}