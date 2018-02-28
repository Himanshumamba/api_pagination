$(document).ready(function(){
   
        $.getJSON("data.json", function(result){
    var table =  $('#student_data');

 var max_size=  result.length; 
 var sta = 0;
 var elements_per_page = 4;
 var limit = elements_per_page;
 goFun(sta,limit);
 function goFun(sta,limit) {
  for (var i =sta ; i < limit; i++) {
    
    var $nr = $('<tr><td>Name: -' +result[i]['name'] + '</td><td>Description :-' + result[i]['description']  + '</td></tr>');
    table.append($nr);
  }
  }
  $('#nextValue').click(function(){
  
  var next = limit;
  if(max_size>=next) {
  limit = limit+elements_per_page;
  table.empty();
  goFun(next,limit);
  }
  });
  $('#PreeValue').click(function(){
  var pre = limit-(2*elements_per_page);
  if(pre>=0) {
  limit = limit-elements_per_page;
  table.empty();
  goFun(pre,limit); 
  }
  });

        	var student_data ='';
        	var elements = ''
        	$.each(result,function(key ,value){

        		student_data +='<tr>';

        		student_data +='<td>'+value.name+'</td>';
        		student_data +='<td>'+value.description+'</td>';
  		     
  		     
        		student_data +='</tr>'; 


            $.each(value.elements,function(i,v){
               	console.log(v);
                     $("#dd1list").append($('<option></option').html( this.value));
                       $("#dd2list").append($('<option></option').html(this.value.short_name ));
                       $("#dd3list").append($('<option></option').html(v.value));

                         $("#ddl4ist").append($('<option></option').html(this.value.long_name));

                   $("#ddlist").append($('<option></option').html(this.value.duration));

   


	}); $('#ddlist').change(function () {
            console.log($(this).val());
            //Code to select image based on selected car id
        });




        	});

       
          $("#student_data").append(student_data);
        });
    });

