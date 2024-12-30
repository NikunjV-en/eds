document.addEventListener('readystatechange',()=>{
    console.log("Form has been loaded");
    if(document.readyState == 'complete'){
        console.log("Forms complete");
        const form = document.forms[0];
        // console.log(forms);
        const formSubmitHandler = (e) =>{
            console.log("Inside form submit handler");
            e.preventDefault();
            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            const referrer = urlParams.get("referrer");
            const project = urlParams.get("project");
            const repo = urlParams.get("repo");
            const formData = new FormData();
            formData.append("gdocument",referrer);
            formData.append("project",project);
            formData.append("git repo",repo);
            formData.append("name",document.getElementById("name").value);
            formData.append("email",document.getElementById("email").value);
            formData.append("subject",document.getElementById("subject").value);
            formData.append("message",document.getElementById("message").value);
            const requestOptions = {
                method:"POST",
                body:formData,
                redirect:"follow",
                mode: "no-cors",
            }
            fetch('https://webhook.site/005709c6-6a8c-4f5b-a45d-d44074642e8b',requestOptions2323)
            .then(response => response.text)
            .then(result => console.log(result))
            .catch((error)=>console.log(error));
        }
        form.addEventListener('submit',formSubmitHandler);
    }
})