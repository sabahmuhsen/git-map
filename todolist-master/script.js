function updateprogress() {
  
  // get box count
  var count = 0;
  var checked = 0;
  function countBoxes() { 
    count = $("input[type='checkbox']").length;
    console.log(count);
  }
  
  countBoxes();
  $(":checkbox").click(countBoxes);
  
  // count checks
  
  function countChecked() {
    checked = $("input:checked").length;
    
    var percentage = parseInt(((checked / count) * 100),10);
    $("#progress").val(percentage);
    $(".progressbar-label").text(percentage + "%");
  }
  
  countChecked();
  $(":checkbox").click(countChecked);
};


/* Brings the form from the toDo list into focus and calls submit event's function */
$('#toDo').submit(function () {
    /* If the input value is not an emtpy string */
    if ($('input').val() !== '') {
        /* Creates the list item and the cross to remove the list item*/
        var input_value = $('input').val();
//<<<<<<< HEAD
        $('ul').append('<li>' + input_value + '<a href="" id="cross">x</a></li>' + '<input type="checkbox" name = "box1"/>');
//=======
        $('ul').append('<li>' + input_value + '<a href="" id="cross"><img src="45292.png"></a></li>');
//>>>>>>> origin/master

    };
    /* If the input value is an empty string do nothing*/
    $('input').val('');
    updateprogress();
    
    return false;
});
//<<<<<<< HEAD

/* Function to check the list item */
$("#stuff").on('click', 'li', function () {
    /* Makes sure the href doesn't take the user anywhere */

    $(this).css("text-decoration", "line-through");
    

});

//=======
//>>>>>>> origin/master
/* Function to remove the list item */
$(document).on('click', '#cross', function (e) {
    /* Makes sure the href doesn't take the user anywhere */
    e.preventDefault();
    $(this).parent().remove();
});


/* Function to check the list item */
$("#stuff").on('click', 'li', function () {
    /* Makes sure the href doesn't take the user anywhere */
    $(this).css("text-decoration", "line-through");
});  

/* progressbar script*/
window.onload=function() {
           var a=document.querySelector(".progress");
           var i = 0;
          setInterval(function() {
              if (a.style.width == "100%") {
                  i = 100;
                  a.style.width="100%";
              } else {
                  
            i++; 
            a.style.width = i +"%";
            a.innerHTML = i + "%"; 
              }
          },100);
      }

