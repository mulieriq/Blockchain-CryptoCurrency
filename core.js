const SHA256 = require('crypto-js/sha256');
//Block
class Block {
    constructor(timestamp, last_hash, hash, data) {
        this.timestamp = timestamp;
        this.last_hash = last_hash;
        this.hash = hash;
        this.data = data;
    }
    toString() {
        return `Block -
        Timestamp :${this.timestamp}
        Last Hash :${this.last_hash.substring(0.10)}
        Hash      :${this.hash.substring(0,10)}
        Data      :${this.data}`;
    }
    //genesis block
    static genesis() {
        return new this('Genesis', '----', 'f1r57-h45h', []);
    }
    //mine block
    static mineBlock(lastBlock, data) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);

        return new this(timestamp, lastHash, hash, data);
    }
    //hash
    static hash(timestamp, lastHash, data) {
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    //blockhash

    static blockHash(block) {
        const {
            timestamp,
            last_hash,
            data
        } = block;
        return Block.hash(timestamp, last_hash, data);
    }
}

module.exports = Block;