function getXML (test) { 
    // get the content from the xml file   
    fetch(test).then(response => response.text()
    ).then(xmlString => { 
        const parser = new DOMParser();
        const xmlDocument = parser.parseFromString(xmlString, 'text/xml');
        // find the relevant ID
        const file = xmlDocument.querySelector('trans-unit[id="42007"] target');
        let test2 = ""
        // check if its right ID, if not message
        if(file){
            test2 = file.textContent;
        } else {
            test2 = "ELement Not Found"
        }
        // save result in a html file
        document.getElementById("htmlfile").innerHTML = test2;
        
        console.log(test2);


       

                    
        const content = test2;
        // Create a Blob"file" for the result
        const blob = new Blob([content], { type: 'text/plain' });
 
        // Separet URL for the blob
        const blobUrl = URL.createObjectURL(blob);
            document.getElementById("blobfile").href = blobUrl;
         
                
        


        
        
    })
}
    

getXML('./file.xml');