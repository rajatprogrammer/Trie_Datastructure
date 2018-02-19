var async = require('async');
class TrieNode {
    constructor(ch) {
        this.value = ch;
        this.EndofWord = false;
        // this.isLeaf = true;
        this.Alphabet = new Map();
        this.data = {};
    }
}
class TrieOperation {
    insertNode(root, word, data = { "no_value": "no value" }) {
        this.crawl = root;
        for (let level = 0; level < word.length; level++) {
            if (this.crawl.Alphabet.has(word[level])) {
                this.crawl = this.crawl.Alphabet.get(word[level]);
            }
            else {
                let temp = new TrieNode(word[level]);
                this.crawl.isLeaf = false;
                this.crawl.Alphabet.set(word[level], temp);
                this.crawl.Alphabet = this.sortKeyMap(this.crawl.Alphabet);
                this.crawl = temp;
            }
        }
        this.crawl.EndofWord = true;
        this.crawl.data = data;
    }
    prefixDepthSearching(root, prefix) {
        let depth = 0;
        this.crawl = root;
        for (let level = 0; level < prefix.length; level++) {
            if (this.crawl.Alphabet.has(prefix[level])) {
                this.crawl = this.crawl.Alphabet.get(prefix[level]);
                depth = depth + 1;
            }
            else {
                break;
            }
        }
        return (this.printPrefix(this.crawl, depth, prefix));
    }
    sortKeyMap(map) {
        return (new Map([...map.entries()].sort()));
    }
    printPrefix(root, depth, prefix) {
        let store = [];

    }
    childOfNode(node) {
        return (node.Alphabet.size);
    }
    findLongestPrefix(root, arrayOfString) {
        this.crawl = root;
    }
    asyncTraversalOfTree(root, cb) {

    }
    preorderTree(root, store) {
        debugger;
        if (root == null) {
            return;
        }
        else {
            for (let level = 0; level < this.childOfNode(root); level++) {
                // this.asyncTraversalOfTree(, () => {

                // });
            }

        }

    }
    preorderAsyncTree(root) {
        this.crawl = root.Alphabet;
        let store = [];
        if (this.crawl == null) {
            return
        }
        else {
            this.crawl.forEach((value, key) => {
                if (this.crawl != null) {
                    store.push(key);
                    this.crawl = value;
                    console.log(store);
                    this.preorderAsyncTree(value);
                }
            })
        }
    }
    searchWordIsPresent(root, word) {
        let flag = 1;
        for (let i = 0; i < word.length; i++) {
            if (root.Alphabet.has(word[i])) {
                root = root.Alphabet.get(word[i]);
            }
            else {
                flag = 0;
                break;
            }
        }
        if (flag == 1 && root.EndofWord == true) {
            return (true);
        }
        else {
            return (false);
        }
    }

}
var root = new TrieNode('root');
var c2 = new TrieOperation();
debugger;
c2.insertNode(root, "rohan", { "phone": 9412276612 });
// c2.insertNode(root, "iajan", { "phone": 9412276612 });
// c2.insertNode(root, "bno", { "phone": 9412276612 });
// c2.insertNode(root, "anmq", { "phone": 9412276612 });
// c2.insertNode(root, "nmrt", { "phone": 9412276612 });
// c2.insertNode(root, "lmr", { "phone": 9412276612 });
debugger;
//c2.sortKeyMap(root.Alphabet);
c2.insertNode(root, "mrt", { "phone": 9412276612 });
c2.insertNode(root, "drt", { "phone": 9412276612 });
c2.insertNode(root, "rajan", { "phone": 9412276612 });
// c2.insertNode(root, "ono", { "phone": 9412276612 });
// c2.insertNode(root, "art", { "phone": 9412276612 });
// c2.insertNode(root, "onmq", { "phone": 9412276612 });
// c2.insertNode(root, "omr", { "phone": 9412276612 });
console.log(c2.searchWordIsPresent(root, "rohanm"));
debugger;
c2.preorderAsyncTree(root)
//c2.preorderTree(root, []);
debugger;
// var myIterable = root.Alphabet;
// // myIterable[Symbol.iterator] = function* () {
// //     yield 1;
// //     yield 2;
// // };
// // for (let value of myIterable) {
// //     debugger;
// //     console.log(value);
// // }
// myIterable.forEach((value, key) => {
//     debugger;
//     console.log(key + ":" + value);
// });
//let iterator = root.Alphabet.values();