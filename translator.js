const letterStr = (letters) => {
	let alphabet = {
    'a': '.-',   
		'b': '-...', 
    'c': '-.-.',
		'd': '-..',  
		'e':'.',    
		'f':'..-.', 
		'g':'--.',  
		'h':'....', 
		'i':'..',   
		'j':'.---', 
    'l':'.-..',
		'k':'-.-',  
		'm':'--',   
		'n':'-.',   
		'o':'---',  
		'p':'.--.', 
		'q':'--.-', 
		'r':'.-.',  
		's':'...',  
		't':'-',    
		'u':'..-',  
		'v':'...-', 
		'w':'.--',  
		'x':'-..-', 
		'y':'-.--', 
		'z':'--..'
}
	const letterArr = letters.split("");
	const morseCode = letterArr.map((letter) => alphabet[letter]);
	const morseCodes = morseCode.join(" /");
	return morseCodes;
};

const userInput = document.querySelector('.user__input');
const submit = document.querySelector('.submit');
const translation = document.querySelector('.translation');
const clear = document.querySelector('.clear');

submit.addEventListener('click', () => {
	words = userInput.value;
	translation.innerHTML = letterStr(words);
});

clear.addEventListener('click', () => {
	translation.value = "";
	userInput.value = "";
});




