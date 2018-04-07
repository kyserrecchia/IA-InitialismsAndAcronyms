
function getIAs(subject){
	if(subject==="biology"){
		return [
			" ABA", "Abscisic Acid", 
			" ATP", "Adenosine Triphosphate", 
			" AAAA", "Autotetraploid", 
			" AABB", "Allotetraploid", 
			" ADP", "Adenosine Diphosphate",
			" ADA", "Adenosine Deaminase",
			" AIDS", "Acquired Immuno Deficiency Syndrome",
			" AMP", "Adenosine Mono Phosophate",
			" ANS", "Autonomic Nervous System",
			" ACT", "Acoustic Test Facility",
			" 5 Bro", "5 Bromo Uracil",
			" BOD", "Biochemical Oxygen Demand",
			" CDP", "Cytosine Diphosphate",
			" CTP", "Cytosine Triphosphate",
			" CT", "Calcitonin Hormone",
			" Cyt", "Cytochrome",
			" CMP", "Cytosine Monophosphate",
			" CVA", "Cerebrovascuular Accident",
			" CoA", "Coenzyme A",
			" COD", "Chemical Oxygen Demand",
			" CIFRI", "Central Inland Fisheries Institute",
			" DNP", "Deoxyribonucleoprotein",
			" DPD", "Diffusion Pressure Deficit",
			" DPT", "Diptheria, Pertussis, Tetanus Vaccine",
			" DNA", "Deoxyribonucleic Acid",
			" DPN", "Diphosphopyridine Nucleotide",
			" EPR", "Electroparamagnetic Resonance",
			" ECG", "Electro Cardiograph",
			" EEG", "Electro Encephalograph",
			" Ebr", "Ebracteate",
			" EMP", "Embden. Meyerhof Parnas Pathway",
			" ELISA", "Enzyme Linked Immuno Sorbant",
			" Epi", "Presidence of Epicalyx",
			" ETS", "Energy Transfer System",
			" ER", "Endoplasmic Reticulum",
			" EM", "Electron Microscope",
			" FSH", "Follicle Stimulating Hormone",
			" FAD", "Flavin Adenine Dinucleotide",
			" FMN", "Flavin Mononucleotide",
			" F2", "Second Filial Generation",
			" FADH2", "Flavin Adenine Dinucleotide (reduced)",
			" F1", "First Filial Generation",
			" GMP", "Guanosine Monophosphate",
			" GMF", "Genetically Modified Food",
			" GMO", "Genetically Modified Organism",
			" GA", "Gibberellic Acid",
			" GH", "Growth Hormone",
			" GTH", "Gonadotrophic Hormone",
			" HIV", "Human Immuno Deficiency Virus",
			" HTLV", "Human T-lymphotrophic Virus",
			" HPV", "Human Papillomavirus",
			" ICSH", "Interstitial Cells Stimulating Hormone",
			" IAA", "Indole-3-Acetic Acid",
			" ICRAF", "International Counceil for Research in Agroforest",
			" MET", "Magneto-Encephalography",
			" MRI", "Magnetic Resonance Imaging",
			" MSH", "Melanocyte Stimulating Hormone",
			" NMRI", "Nuclear Magnetoc Resonance Imaging",
			" NAD", "Nicotinamide Adenine Dinucleotide",
			" NADH2", "Nicotinamide Adenine Dinucleotide (reduced)",
			" NAA", "Napthalene Acetic Acid",
			" OC", "Oral Contraceptive",
			" OCP", "Oral Contraceptive Pill",
			" PCR", "Polymerase Chain Reaction",
			" PEPA", "Phosphoenal Pyruvic Acid",
			" PPi", "Inorganic Pyrophosphate",
			" PGA", "Phosphoglyceric Acid",
			" PKU", "Phenylketonuria",
			" PS-I", "Pigment System",
			" PIH", "Protein Inhibiting Hormone",
			" PPLO", "Pleuro Pneumonia-like Organisms",
			" RNA", "Ribonucleic Acid",
			" RH", "Releasing Hormone",
			" RG", "Regulator Gene",
			" RPF", "Rehal Plasma Flow",
			" RUBP", "Ribulose Biophosphate",
			" RUDP", "Ribulose Biophosphate"
		];
	}
}

//Replaces instances of initialisms and acronyms with themselves surrounded by spans for tooltip text to show
function replacer(string, word, fullWord){
	let spannedWord = "&nbsp<span class='injectClass'>" + word + "<span class='tooltiptext'>" + fullWord + "</span></span>";
	let newString = string.replace(new RegExp(word, 'g'),spannedWord);
	return newString; 
}

//function called upon clicking "GENERATE!" button 
function getChoiceSetChoice(){
	let injectedDiv = document.getElementById('inject');
	let selectedSubject = document.getElementById('subjects').value;
	//make sure user has picked a choice before running
	if(selectedSubject==="choose"){
		alert("Please choose a subject first");
	} else{
		let IAs = getIAs(selectedSubject);
		let textInput = document.getElementById('iaTextArea').value;

		//get everything going in injected div so only this must be updated for each iteration over the IA subject array
		injectedDiv.innerHTML = textInput;

		//array made in pairs so incremented by two
		for(let i=0; i<IAs.length; i+=2){
			let IA = IAs[i];
			let fullIA = IAs[i+1];
			let replaced = replacer(injectedDiv.innerHTML, IA, fullIA);
			injectedDiv.innerHTML = replaced;
		}
		setGenerateStyle();
	}
}

function setGenerateStyle(){
	let overTools = false;
	let overToolTips = false;

	let tooltiptextSet = document.getElementsByClassName('tooltiptext');
	let tooltiptexts = Array.from(tooltiptextSet);
	let tooltiptextLen = tooltiptexts.length;

	for(let i = 0; i<tooltiptextLen; i++){
		tooltiptexts[i].style.visibility = "hidden";
		tooltiptexts[i].style.width = '120px';
		tooltiptexts[i].style.backgroundColor = 'black';
		tooltiptexts[i].style.color = '#fff';
		tooltiptexts[i].style.textAlign = 'center';
		tooltiptexts[i].style.paddingTop = '10px';
		tooltiptexts[i].style.paddingBottom = '5px';
		tooltiptexts[i].style.borderRadius = '6px';
		tooltiptexts[i].style.position = "absolute";
		// tooltiptexts[i].style.transform = '';
		tooltiptexts[i].style.zIndex = '1';
	}

	let toolSet = document.getElementsByClassName('injectClass');
	let tools = Array.from(toolSet);
	let toolLen = tools.length;


	for(let i = 0; i<toolLen; i++){

		tools[i].addEventListener('mouseover', function(){
			overTools = true;
			if(overTools&&overToolTips){
				tooltiptexts[i].style.visibility = 'hidden';
			} else if(overTools){
				tooltiptexts[i].style.visibility = 'visible';
			}
		});

		tools[i].addEventListener('mouseout', function(){
			tooltiptexts[i].style.visibility = "hidden";
			overTools = false;
		});

		tooltiptexts[i].addEventListener('mouseover', function(){
			overToolTips = true;
			// tooltiptexts[i].style.visibility = "hidden";
		});

		tooltiptexts[i].addEventListener('mouseout', function(){
			tooltiptexts[i].style.visibility = "hidden";
			overToolTips = false;
		});
	}	
}


