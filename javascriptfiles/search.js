let queriedWord = "";

async function searchWord(){
  //searchItem=document.searchForm.searchbar.value;
  definitionPart = document.getElementById("definitions");
  definitionPart.innerHTML = ""
  let PoSarr = [];

  getWord= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/Hello`).then((res) =>res.json())
    wordNeeded = getWord[0].word;
    document.getElementById("wordTitle").innerHTML = wordNeeded;
    for(let i = 0; i < getWord[0].meanings.length; i++){
        PoSarr.push(getWord[0].meanings[i].partOfSpeech + "");
        
        const PoS = document.createElement("h3");
        const PoSnode = document.createTextNode(getWord[0].meanings[i].partOfSpeech);
        PoS.appendChild(PoSnode);

        const def = document.createElement("p");
        const defNode = document.createTextNode(getWord[0].meanings[i].definitions[0].definition);
        def.appendChild(defNode);

        definitionPart.appendChild(PoS);
        definitionPart.appendChild(def);
        
        if((getWord[0].meanings[i].definitions[0].example + "") != "undefined"){
            const sentenceUse = document.createElement("p");
            const sentenceUseNode = document.createTextNode(getWord[0].meanings[i].definitions[0].example);
            
            sentenceUse.appendChild(sentenceUseNode);
            definitionPart.appendChild(sentenceUse);
        }
        

        
        
    }
    document.getElementById("partsofspeech").innerHTML = "(" + PoSarr + ")";
    

      
  //get values from API: returns array of dictionaries with 1 or more definitions

  /* Keys from res array:
      "word"
      "meanings": [array of dictionaries]
          contains>>>
          "partsOfSpeech"
          "definitions": [array of dictionaries]
              contains>>>
              "definition"
              "example" (optional)
          "synonyms":[]
          "antonyms":[]
          "sourceUrls":[url,url...]

  */
  //find the number of words (defined) and returned from the API
  for (i=0; i<res.length; i++){
      //create box on page for each word,

          //then within each box sift through array of dictionarries corresponding to parts of speech/ multiple defintions
  }
  
  /*console.log(res);
  }).catch(error=>{
      
      console.log("did not get word");
  });*/
}

// window.location.href='';


async function wordToLearn(){

}

searchWord();
//window.onload=wordToLearn();