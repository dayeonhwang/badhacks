$.confirm({
  title: "Hi folks",
  content: '<img src="http://www.mccormick.northwestern.edu/magazine/images/spring-2016/computer-science-horswill.jpg">',
  animationClose: 'top',
    buttons: {
        info: {
            btnClass: 'btn-blue',
            action: function(){
              window.location="https://www.linkedin.com/in/ian-horswill-46a52413/"
            }
        },
        danger: {
            btnClass: 'btn-red any-other-class',
            action: function(){
              window.location="https://twitter.com/ianhorswill?lang=en"
            }
        },
        warning: {
            btnClass: 'btn-warning',
            action: function(){
              window.location="http://www.cs.northwestern.edu/~ian/"
            }
        },
        piazza: {
          btnClass: 'btn-warning',
          action: function() {
            window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          }
        },
        rickrolling: {
          btnClass: 'btn-blue',
          action: function() {}
        },
    }
});