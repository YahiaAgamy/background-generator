var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body =document.getElementById('gradient');

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+color1.value
	+", "
	+color2.value
	+")";
	css.textContent = body.style.background +";";
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);


let obj = {a:'a', b:'b',c:{deep:'try and copy me'}};
let clone = Object.assign({},obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahahahah';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superclone);


Object.keys
Object.values
Object.entries


let obj = {
	username0: 'Sally',
	username1: 'Menna',
	username2: 'Dina'
};
Object.keys(obj).forEach((key,index)=>{
	console.log(key, obj[key]);
});
Object.values(obj).forEach((value)=>{
	console.log(value);
});
Object.entries(obj).forEach((value)=>{
	console.log(value);
});
Object.entries(obj).map((value)=>{
	return value[1] + value[0].replace('username','');
});


//.flat()
const arr4 =[1,2,[3,[4,5]]];
arr4.flat(2);

const entries =['Sally','Dina',,,,'Eman'];
entries.flat();

//.flatMap()


const userEmail1 = 'aliaamoustafa21@gmail.com        '
const userEmail2 = '        aliaamoustafa21@gmail.com'
console.log(userEmail1.trimEnd());
console.log(userEmail2.trimStart());

//fromEntries
const userProfiles = [['commanderTom',23],['deredkZelander',33],['hansel',18]]
Object.fromEntries(userProfiles);


//forEach
const basket = ['apples','oranges','grapes'];

basket.forEach(item => {
	console.log(item);
})

//for of
//iterating over iterables like :arrays, strings.
for (item of basket){
	console.log(item);
}

//for in (works with objects)
//enumerating :objects
const detailedbasket ={apples:5, oranges:10, grapes:1000}
for (item in detailedbasket){
	console.log(item, detailedbasket.item);
}


//ES2020
//BigInt : 324434234354565n
//Nullish Coalesing Operator ??
//Optional Chaining Operator ?.

let andrei_pokemon = {
	pikachu:{
		species:'Mouse Pokemon',
		height: 0.8,
		weight:30,
		power:''
	}
}
let power = andrei_pokemon?.pikachu?.power ?? 'no power';
console.log(power);
















