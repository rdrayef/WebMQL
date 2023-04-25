const ar = {
    // x : 10,
    // y : 20,
    // print: function(){ }
};

const arrays = {} ; 
 
arrays.exp01 = function ()
{
    let t1 = [20,30,40,50];
    t1['0'] = 70 ; 
    t1['a'] = 60 // <=> t1.a = 80
    console.log('t1.length = '+t1.length); 

    for (let i = 0; i < t1.length; i++) { // parcourir les tabs qui ont les indices 
        const element = t1[i];
        console.log(' - '+element);
    }

    let t3 = [] ;
    t3[0] = 4 ; 
    t3[3] = 40 ; 
    t3[5] = 60 ; 

    for (let j = 0; j < t3.length; j++) {
        const element = t3[j];
        console.log(element);
    }

    let t2 = new Array(20,30,40,50) ; 
    t2.forEach(element => {
        console.log('Array.forEach - '+element);
    });
}

arrays.exp02 = function() {
    let t1 = [] ;
    t1[0] = 4 ; 
    t1[3] = 40 ; 
    t1[5] = 60 ; 
    t1['0'] = 70 ; 
    t1['a'] = 60 // <=> t1.a = 80  

    logVar('t1',t1);
    for(let i in t1)
    {
        console.log(' - ',i,' : ',t1[i]);
    }
}

arrays.exp03 = function() {
    let t1 = [] ; // <=> let t1 = new Array()
    t1[0] = 4 ; 
    t1[3] = 40 ; 
    t1[5] = 60 ; 
    

    for(let i of t1) // récupérer les éléments
    {
        console.log(' - ',i);
    }
}

arrays.exp04 = function() {
    let t1 = [] ;  
    t1[0] = 4 ; 
    t1[3] = 40 ; 
    t1[5] = 60 ; 

    t1['0'] = 70 ; 
    t1['a'] = 60 ; 

    for(let i of t1)  
    {
        console.log(' - ',i);
    }
}

arrays.exp05 = function() {
    let t1 = [] ;
    t1.push(20) ; 
    t1.push(30) ; 
    t1.push(40) ;  

    logVar('t1',t1);
    for(let i in t1) 
        console.log(' - ',i,' : ',t1[i]); 
}