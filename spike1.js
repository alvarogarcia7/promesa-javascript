var Promesa = function(payload) {
 var then = null;
 var result =  {
     then: (f)=> {then = f; return result;},
     success: ()=> then(payload),
     f: then,
 };
return result;
};
Promesa.resolve = (payload) => new Promessa(payload)

// Usage: Promesa.resolve(hits).then(function(p) { setTimeout(()=>{console.log('a')}, 1000) }).success()
