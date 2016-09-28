var Promesa = function(payload) {
 var then = null;
 var beh =  {
     then: (f)=> {then = f; return beh;},
     success: ()=> then(payload),
     f: then,
 };
return beh;
};
Promesa.resolve = (payload) => new Promessa(payload)

// Usage: Promesa.resolve(hits).then(function(p) { setTimeout(()=>{console.log('a')}, 1000) }).success()
