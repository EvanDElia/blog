require('./styles.less');

document.getElementById('word-count').innerHTML = (document.getElementById('content').innerHTML.split(" ").length) + ' words'