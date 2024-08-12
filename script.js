document.getElementById("colorSelector").addEventListener("change", function() {
    var selectedColor = this.value;
    var inputElement = document.getElementById("text");

    inputElement.style.color = selectedColor;

    // Share feature
    if (navigator.share) {
        navigator.share({
            title: 'Selected Color',
            text: `The selected color is ${selectedColor}.`,
            url: window.location.href
        }).then(() => {
            console.log('Color shared successfully');
        }).catch((error) => {
            console.error('Error sharing color:', error);
        });
    } else {
        alert('Sharing is not supported on this browser.');
    }
});
