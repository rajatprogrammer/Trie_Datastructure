"use strict";
 class TrieNode {
    constructor(ch='root') {
        this.value = ch;
        this.EndofWord = false;
        this.Alphabet = new Map();
        this.data = {};
    }
    deleteTree(root)
    {
        return(true);
    }
}
 class TrieOperation {
    constructor(root,arrayOfWord){
        let counter = 0;
        arrayOfWord.forEach((element)=>{
            this.insertNode(root,element.word,element.data,counter);
            ++counter;
        });
    }
    insertNode(root, word, data = { "no_value": "no value" },index) {
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
        this.crawl.index = index;
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
    childOfNode(node) {
        return (node.Alphabet.size);
    }
    checkKeyPresent(root,char)
    {
        if(root.Alphabet.has(char))
        {
            return(true);
        }
        else{
            return(false);
        }

    }
    LongestPrefixFromTree(root,pref=[]) {
      if(root)
      {
          if(root.Alphabet.size==1)
          {
            root.Alphabet.forEach((k, v, m) => pref.push(v));
            return(this.LongestPrefixFromTree(root.Alphabet.get(pref[pref.length-1]),pref));
          }
          else{
            return (pref);
          }
      }  
      else{
          return(pref);
      }
    }
    printLevel(root, store=[]) {
        debugger;
        if (root == null) {
            return;
        }
        else {
            for (let level = 0; level < this.childOfNode(root); level++) {
            
            }

        }

    }
    preorderTree(root,store=[],temp=[]) {
        this.crawl = root;
         if(this.crawl.EndofWord==true)
        {
            debugger;
            //store.push(temp);
            temp.push('|');
            console.log("hello" + temp);
           // temp= null
            return(temp);
        }
        else {
            this.crawl.Alphabet.forEach((value, key) => {
                if (this.crawl != null) {
                    temp.push(key);
                    console.log(key);
                    this.crawl = value;
                    //console.log(value);
                    return(this.preorderAsyncTree(this.crawl,store,temp));
                }
                else{
                    return(temp);
                }
            })
        }
    }
    printSorted(root,arrayOfWord,sorted=[])
    {
        let data = this.preorderSorted(root);

        data.forEach((index)=>{
             sorted[index.counter] = arrayOfWord[index.index]; 
        });
        return(sorted);
    }
    preorderSorted(root,arr=[]) {
        if(root==null)
        {
            return false;
        } 
        if(root.Alphabet!=undefined)
        {
            root.Alphabet.forEach((value, key) => {
                if(value!=null)
                {
                      if(value.EndofWord==true)
                      {                                               
                          if(arr.length!=0)
                          {
                              let counter = arr[arr.length-1]['counter'];
                              counter = counter+1;
                              arr[counter] = {index:value.index,counter:counter};
                          }
                          else{
                              let counter =0;
                              arr[counter] = {index:value.index,counter:counter};
                          }
                      }
                }
                  this.preorderSorted(value,arr);
          });
        }
        return(arr);
       
    }
    searchWordRecursiveReturnRoot(root, word, i) {
        if ((root) && root.EndofWord == true && word.length == i) {
            return (root)
        }
        else {
            if (root.Alphabet.has(word[i])) {
                return (this.searchWordRecursive(root.Alphabet.get(word[i]), word, ++i));
            }
            else {
                return (false);
            }
        }
    }
    searchWordRecursive(root, word, i=0) {
        if ((root) && root.EndofWord == true && word.length == i) {
            return (true)
        }
        else {
            if (root.Alphabet.has(word[i])) {
                return (this.searchWordRecursive(root.Alphabet.get(word[i]), word, ++i));
            }
            else {
                debugger;
                return (false);
            }
        }
    }
    deleteWordRecursiveSoft(root,word,level)
    {
        if ((root) && root.EndofWord == true && word.length == level) {
                root.EndofWord = false;
                return(true);
        } 
        else{
            if (root.Alphabet.has(word[level])) {

                return (this.deleteWordRecursiveSoft(root.Alphabet.get(word[level]), word, ++level));
            }
            else {
                return (false);
            }
        }
    }
    ifFreeNode(root)
    {
        debugger;
        if(this.childOfNode(root)>0)
        {
            return(false);
        }
        else{
            return(true);
        }
    }
    flushTree(root)
    {
        delete(root.Alphabet);
        debugger;
        return(true);
    }
    deleteWordRecursiveHard(root,word,level)
    {
        debugger;
        if (root) {
            if(root.EndofWord && word.length==level)
            {
               // console.log("h1" + root.value +"level" +  level + "word length" + word.length);
                if(this.childOfNode(root)==0)
               {
                    console.log(root.value);
                    word=word.slice(0,word.length-1)
                    console.log(word);
                    debugger;
                    return(this.flushTree(root));
               }
               else{
                    return(false);
               }
            }
            else
            {
                if (this.deleteWordRecursiveHard(root.Alphabet.get(word[level]), word, ++level)) {
                    debugger;
                    if(this.ifFreeNode(root) && root)
                    {
                        debugger;
                        this.flushTree(root);
                    }   
                }
            }
        } 
    }
    addKeyONData(root,word,arrayofkeys)
    {
        if(this.searchWordRecursive(root,word))
        {
            debugger;
            for (let i = 0; i < word.length; i++) {
                if (root.Alphabet.has(word[i])) {
                    root = root.Alphabet.get(word[i]);
                }
            }
            Object.keys(arrayofkeys).forEach(function(key) {
                debugger;
                root.data[key]= arrayofkeys[key];
              });
        }
        else
        {
            console.log("word is not existed");
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
    checkPrefixPresent(root,pref,i=0)
    {
        if ((root) && pref.length == i) {
            debugger;
            return (root)
        }
        else {
            if (root.Alphabet.has(pref[i])) {
                return (this.checkPrefixPresent(root.Alphabet.get(pref[i]),pref, ++i));
            }
            else {
                return (false);
            }
        }
    }
    autoSuggestion(root,pref,suggestedList)
    {
        let word = [];
        let count = 0;
        if(root = this.checkPrefixPresent(root,pref))
        {
            if(root.EndofWord)
            {
                word[count] = pref;
            }
            if(this.childOfNode(root))
            {
                this.root.Alphabet.forEach((value, key) => {
                    if (this.root != null) {
                    }
                })
            }
            else{
                return(false);
            }
        }
        else{
            return(false);
        }
        
    }
    itreativeSuggestedList(root,word=[],k=0)
    {
        if(root && root.EndofWord && this.childOfNode(root)==0)
        {
            return(word);
        }
        else if(root && root.EndofWord)
        {
            word[k] = word[k] + root.value;
        }
        else
        {
            this.root.Alphabet.forEach((value, key) => {
                if (this.root != null) {
                }
            })   
        }
    }

}
debugger;
 var root = new TrieNode('root');
var data = [
 {word:"rohan", data:{ "phone": 9412276612 }},
 {word:"rohanc", data:{ "phone": 9412276612 }},
 {word:"rohac", data:{ "phone": 9412276612 }},
 {word:"iajan", data:{ "phone": 9412276612 }},
 {word:"iajop", data:{ "phone": 9412276612 }},
 {word:"iajcn", data: { "phone": 9412276612 }},
 {word:"bno", data:{"phone": 9412276612 }},
 {word:"anmq", data:{ "phone": 9412276612 }},
 {word:"nmrt", data:{ "phone": 9412276612 }},
 {word:"lmr", data:{ "phone": 9412276612 }},
 {word:"opk", data:{ "phone": 9412276612 }}
];
debugger;
var c2 = new TrieOperation(root,data);
debugger;
//c2.addKeyONData(root,"rohan",{"dsd":"sdsd","raja":"dsdsd","phone":954});
console.log(c2.checkPrefixPresent(root,"roh"));
debugger;
// c2.insertNode(root, "rohan", { "phone": 9412276612 });
// c2.insertNode(root, "rohanc", { "phone": 9412276612 });
// c2.insertNode(root, "rohac", { "phone": 9412276612 });
// // c2.insertNode(root, "iajan", { "phone": 9412276612 });
// // c2.insertNode(root, "iajop", { "phone": 9412276612 });
// // c2.insertNode(root, "iajcn", { "phone": 9412276612 });
// // c2.insertNode(root, "bno", { "phone": 9412276612 });
// // c2.insertNode(root, "anmq", { "phone": 9412276612 });
// // c2.insertNode(root, "nmrt", { "phone": 9412276612 });
// // c2.insertNode(root, "lmr", { "phone": 9412276612 });
// debugger;
// var data = c2.preorderAsyncTree2(root)
// console.log(data);
//c2.sortKeyMap(root.Alphabet);
// c2.insertNode(root, "mrt", { "phone": 9412276612 });
// c2.insertNode(root, "drt", { "phone": 9412276612 });
// c2.insertNode(root, "rajan", { "phone": 9412276612 });
// c2.insertNode(root, "ono", { "phone": 9412276612 });
// c2.insertNode(root, "art", { "phone": 9412276612 });
// c2.insertNode(root, "onmq", { "phone": 9412276612 });
// c2.insertNode(root, "omr", { "phone": 9412276612 });
//debugger;
//console.log(c2.searchWordRecursive(root, "drt", 0));
debugger;
//console.log(c2.deleteWordRecursiveSoft(root, "rohan", 0));
//console.log(c2.deleteWordRecursiveHard(root, "opk", 0,0));
//console.log("hello");
//console.log(c2.printSorted(root,data));
 //console.log(c2.searchWordRecursive(root, "rohan", 0));
 //console.log(c2.LongestPrefixFromTree(root));
// console.log(root.deleteTree(root));
// debugger;
//console.log(root);
//c2.preorderAsyncTree(root)
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
