$.confirm({
  title: "Hi folks",
  content: '<img src="http://media.gettyimages.com/photos/robert-zubek-and-ian-horswill-from-northwestern-university-calibrate-picture-id1607471">',
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
        learn: {
          btnClass: '.btn-lg',
          action: function() {
              window.location="https://docs.racket-lang.org/guide/intro.html#%28part._.Interacting_with_.Racket%29"
          }
        },
        meet: {
          btnClass: '.btn-success',
          action: function() {
              window.location="https://youtu.be/ZLF5dz9SM0w?t=70"
          }
        },
    },
});
