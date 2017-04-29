$.confirm({
  title: "Hi folks, what I mean by game design is",
  content: '<img src="http://www.mccormick.northwestern.edu/magazine/images/spring-2016/computer-science-horswill.jpg">',
  animationClose: 'top',
    buttons: {
        info: {
            btnClass: 'btn-purple',
            action: function(){
              window.location="http://www.cs.northwestern.edu/~ian/"
            }
        },
        danger: {
            btnClass: 'btn-red any-other-class',
            action: function(){
              window.location="https://vimeo.com/78173848"
            }
        },
        warning: {
            btnClass: 'btn-warning',
            action: function(){
              window.location="https://www.youtube.com/watch?v=ZLF5dz9SM0w"
            }
        },
        piazza: {
          btnClass: 'btn-blue',
          action: function() {
            window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          }
        },
        rickrolling: {
          btnClass: 'btn-green',
          action: function() {}
        },
    },
});