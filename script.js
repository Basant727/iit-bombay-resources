document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resourceInput = event.target.resource.files[0];
    const descriptionInput = event.target.description.value;

    if (resourceInput && descriptionInput) {
        const resourceList = document.getElementById('resourceList');
        const resourceItem = document.createElement('div');
        resourceItem.textContent = `${descriptionInput} (Uploaded: ${resourceInput.name})`;
        resourceList.appendChild(resourceItem);

        //
