
async function searchWord(){
    searchItem=document.searchForm.searchbar.value;
    getWord= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchItem}`).then(res=>(res.json())).then(res=>{
        
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
    
    console.log(res);
    }).catch(error=>{
        
        console.log("did not get word");
    });
}

// window.location.href='';


async function wordToLearn(){

}


//window.onload=wordToLearn();