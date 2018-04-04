
let injectedDiv = document.getElementById('inject');

function getTextAndSubjectChoice(){	
	let selectedSubject = document.getElementById('subjects').value;
	let IAs = getIAs(selectedSubject);
	let textInput = document.getElementById('iaTextArea').value;

	for(var i=0; i<IAs.length; i+=2){
		let IA = IAs[i];
		let fullIA = IAs[i+1];
		if(i===0){
			let replaced = replacer(textInput, IA, fullIA);
			let injectedDiv = document.getElementById('inject');
			injectedDiv.innerHTML = replaced;
		} else{
			let replaced = replacer(injectedDiv.innerHTML, IA, fullIA);
			injectedDiv.innerHTML = replaced;
		}
	}		
}

function getIAs(subject){
	if(subject==="biology"){
		return ["PCR", "Polymerase Chain Reaction", "RNA", "Ribonucleic Acid"];
	}
}

function replacer(string, word, fullWord){
	// let regWord = "/" + word + "/g";
	let spannedWord = "<span class='injectClass'>" + word + "<span class='tooltiptext'>" + fullWord + "</span></span>";
	let newString = string.replace(new RegExp(word, 'g'),spannedWord);
	// console.log(newString);
	return newString; 
}
