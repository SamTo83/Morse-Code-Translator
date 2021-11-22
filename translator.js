let morseCode = {
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


export const translate = (letter) => {
  let mCode = letter.split(" ").map((mCode) => mCode.split("")
    .map((character) => morseCode[character]).join(" ")).join("  ");
  return mCode;
};


