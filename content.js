$.confirm({
  title: "Hi folks",
  content: '<img src="http://www.mccormick.northwestern.edu/magazine/images/spring-2016/computer-science-horswill.jpg">',
  //animation: 'zoom',
  animationClose: 'top',
    buttons: {
        info: {
            btnClass: 'btn-blue',
            action: function(){}
        },
        danger: {
            btnClass: 'btn-red any-other-class', // multiple classes.
        },
        warning: {
            btnClass: 'btn-warning',
        },
    }
});
