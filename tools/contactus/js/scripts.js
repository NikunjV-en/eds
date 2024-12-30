document.addEventListener('readystatechange',()=>{
    console.log("Form has been loaded");
    if(document.readyState == 'complete'){
        console.log("Forms complete");
        const forms = document.forms[0];
        console.log(forms);
    }
})