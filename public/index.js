
let injectedDiv = document.getElementById('inject');

function getTextAndSubjectChoice(){	
	let selectedSubject = document.getElementById('subjects').value;
	let IAs = getIAs(selectedSubject);
	let textInput = document.getElementById('iaTextArea').value;

	for(var i=0; i<IAs.length; i++){
		let IA = IAs[i];
		if(i===0){
			let replaced = replacer(textInput, IA);
			let injectedDiv = document.getElementById('inject');
			injectedDiv.innerHTML = replaced;
		} else{
			let replaced = replacer(injectedDiv.innerHTML, IA);
			injectedDiv.innerHTML = replaced;
		}
	}		
}

function getIAs(subject){
	if(subject==="biology"){
		return ["PCR", "RNA"];
	}
}

function replacer(string, word){
	// let regWord = "/" + word + "/g";
	let spannedWord = "<span class='injectClass'>" + word + "</span>";
	let newString = string.replace(new RegExp(word, 'g'),spannedWord);
	// console.log(newString);
	return newString; 
}
