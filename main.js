addEventListener('scroll', function() {
    let header = document.getElementById('header');
    let innerheader = document.getElementById('innerheader');
    let nav = document.getElementById('nav').children;
    let logotext = document.getElementById('logotext');
    
    if (document.documentElement.scrollTop > 199) {
        header.style.backgroundColor = 'rgba(14,53,120,1)'
        header.style.height = '80px'
        header.style.boxShadow = '0px 0px 15px 1px #000000'
        innerheader.style.backgroundColor = 'rgba((14,53,120,1))'
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.color = 'white'
        }
        logotext.style.color = 'white'
  
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        header.style.height = '100px'
        header.style.boxShadow = 'none'
        innerheader.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        for (var i = 0; i < nav.length; i++) {
            nav[i].style.color = 'black'
        }
        logotext.style.color = 'black'
    }
});
  
  