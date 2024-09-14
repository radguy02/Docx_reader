document.getElementById('docx-file').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && file.name.endsWith('.docx')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
                .then(function(result) {
                    const output = document.getElementById('output');
                    output.innerHTML = result.value;
                    
                    if (result.messages.length > 0) {
                        console.warn(result.messages);
                    }
                })
                .catch(function(err) {
                    console.error("Failed to convert DOCX file", err);
                    alert('Error reading the DOCX file.');
                });
        };

        reader.readAsArrayBuffer(file);
    } else {
        alert('Please upload a valid DOCX file.');
    }
});
