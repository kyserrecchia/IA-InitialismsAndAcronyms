
let injectedDiv = document.getElementById('inject');

function getTextAndSubjectChoice(){	
	let selectedSubject = document.getElementById('subjects').value;
	if(selectedSubject==="choose"){
		alert("Please choose a subject first");
	} else{
		let IAs = getIAs(selectedSubject);
		let textInput = document.getElementById('iaTextArea').value;
		console.log(IAs.length);
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
}

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

function replacer(string, word, fullWord){
	let spannedWord = "&nbsp<span class='injectClass'>" + word + "<span class='tooltiptext'>" + fullWord + "</span></span>";
	let newString = string.replace(new RegExp(word, 'g'),spannedWord);
	// console.log(newString);
	return newString; 
}




