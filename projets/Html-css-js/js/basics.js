/* script externe */

afficher("Script externe");

// x4 = undefined
// null = référence d'un objet
var x1 = 20 , x2 = 'Une chaine' , x3 = true , x4 , x5 = null  ;

function afficher(msg) {
    //alert(msg)
    // , accéder à la structure de l'objet
    // + : toString
    console.log(msg,',');
}

function logVar(name,v)
{
    console.log(name+" : "+v+" : "+ typeof v);
}

function exp01()
{
    logVar('x1',x1);
    logVar('x2',x2);    
    logVar('x3',x3); 
    logVar('x4',x4); 
    logVar('x5',x5);
}

function exp02()
{
    // window object de type Window 
    // il s'agit d'un contexte global
    // ou encore contexe de déclaration globale
    logVar('x1',x1);
    window.logVar('window x1',window.x1);
    window.console.log("object window");
    window.alert('object window')
}

function exp03()
{
    let a1 = 20 ; 
    let a2 = new Number(20) ; 
    let a3 = new Number(20) ;
    let a4 = false ;
    logVar('a1',a1);
    logVar('a2',a2);
    
    console.log('a1 == a2 ' , a1 == a2); // on compare les valeurs 
    console.log('a2 === a3 ' , a2 === a3); // comparaison stricte ( type et réf(valeur) )
    console.log('a2 == a3 ' , a2 == a3); // on compare les références 
    console.log('a1 == a4 ' , a1 == a4);
    // la meme chose pour Srting et Boolean
    let s1 = 'chaine' ; 
    let s2 = new String('chaine');

    let b1  = 20 > 10 ; 
    let b2 = new Boolean(true) ; 
}


function Point (x,y)
{
    this.x = x ; 
    this.y = y ;
}

class A { // les classes se transforment en fonction 

}

let p = new Point(20,30);

function exp04()
{
    let a1 = 0 ; 
    let a2 = '' ; 
    let a3 = [];

    logVar('a1',a1);
    logVar('a2',a2);
    logVar('a3',a3);

    console.log('a1 === a2' , a1 === a2 );
    console.log('a1 === a3' , a1 === a3 );
}

function exp05()
{
    let x1 = '20' ; 
    let x2 = '30' ;

    let s = parseFloat(x1) + parseFloat(x2) ; 
    console.log("s = "+s);
}

// tableaux , functions et objects
function exp06()
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

function exp07() {
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

function exp08() {
    let t1 = [] ; // <=> let t1 = new Array()
    t1[0] = 4 ; 
    t1[3] = 40 ; 
    t1[5] = 60 ; 
    

    for(let i of t1) // récupérer les éléments
    {
        console.log(' - ',i);
    }
}

function exp09() {
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

function exp10() {
    function sum(x,y)
    {
        return x+y ; 
    }

    logVar('sum',sum);
    let s = sum(10,52) ; 

    console.log('s : '+s);

    let f = sum ;
    s = f(50,10) ; 
    
    // sum.length = return the agrs count
    console.log('s : '+s);
    console.log('f.name : '+sum.name+', f.length : '+sum.length);
}

function exp11() {
    
}

function exp12() {
    
}

function exp13() {
    
}

function exp14() {
    
}

function exp15() {
    
}

function exp16() {
    
}