//block import
const Block = require('./core');
let bc = [Block.genesis()]
for(i = 0 ; i < 10 ; i ++){
    const min1 = Block.mineBlock(bc[bc.length-1],`foo ${i}`);
    bc.push(min1)
    console.log(bc[i].toString());
}