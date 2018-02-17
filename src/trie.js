class TrieNode {
    constructor(ch) {
        debugger;
        this.value = ch;
        this.EndofWord = false;
        this.isLeaf = true;
        this.Alphabet = new Map();
        this.data = {};
    }
}
class TrieOperation {
    insertNode(root, word, data = { "no_value": "no value" }) {
        debugger;
        this.crawl = root;
        for (let level = 0; level < word.length; level++) {
            if (root.Alphabet.has(word[level])) {
                this.crawl = this.crawl.Alphabet.get(word[level]);
            }
            else {
                let temp = new TrieNode(word[level]);
                this.crawl.isLeaf = false;
                this.crawl.Alphabet.set(word[level], temp);
                this.crawl = temp;
                debugger;
            }
        }
        this.crawl.EndofWord = true;
        this.crawl.data = data;
    }
    prefixDepthSearching(root, prefix) {
        let depth = 0;
        this.crawl = root;
        debugger;
        for (let level = 0; level < prefix.length; level++) {
            if (this.crawl.Alphabet.has(prefix[level])) {
                this.crawl = this.crawl.Alphabet.get(prefix[level]);
                depth = depth + 1;
            }
            else {
                break;
            }
        }
        debugger;
        return (depth);
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
    preorderTree(root, store) {
        if (root.isLeaf == true) {
            return (false);
        }
        else {
            //for (let level = 0; level < this.childOfNode(root))

        }

    }

}
var root = new TrieNode('root');
var c2 = new TrieOperation();
c2.insertNode(root, "rohan", { "phone": 9412276612 });
debugger;
c2.insertNode(root, "rajan", { "phone": 9412276612 });
debugger;
c2.insertNode(root, "ono", { "phone": 9412276612 });
debugger;
c2.insertNode(root, "onmq", { "phone": 9412276612 });
debugger;
c2.insertNode(root, "omr", { "phone": 9412276612 });
debugger;
depth = c2.prefixDepthSearching(root, "roh");
debugger;
let iterator = root.Alphabet.values();