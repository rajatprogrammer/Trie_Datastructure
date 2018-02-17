var trie = require('./trie');
module.exports ={
    variabel_validation: (object)=>{
        if(object==null)
        {
            throw new Error('requried a object which is not null and not a number');
        }
        else if(Array.isArray(object))
        {
             t1 = new trie();
        }
        else{

        }
    }
}
var i= "{sasasasasa}";
console.log(i.valueOf(2));