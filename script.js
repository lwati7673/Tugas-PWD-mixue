
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.classList.contains('active')) {
        content.classList.remove('active');
    } else {
        var contents = document.querySelectorAll('.content-container');
        contents.forEach(function(item) {
            item.classList.remove('active');
        });
        content.classList.add('active');
    }
}
  