 function clickToggle(toggleClass) {
    let selectClass = document.getElementsByClassName(toggleClass)
    let style = selectClass[0].style;
    if (style.display === 'block') {
        style.display = 'none';
    } else {
        style.display = 'block';
    }
 }


