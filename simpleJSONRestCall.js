<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
<script type="text/javascript">

function initializeVariables(results){	
var str = JSON.stringify(results);		

for(var i=0; i<results.length; i++){
	var result = results[i];
	
}
alert("http://portal.verticalbridge.com/Leasing/MLA%20Document%20Library/Forms/DispForm.aspx?ID="+result["Id"]);
}
function f1(){
	//The only thing you will have to do here is change the portion of the endPointUrl that says "MLA-003" to what ever the MLA number is in Floyd
	var endPointUrl = "http://portal.verticalbridge.com/Leasing/_api/web/lists/GetByTitle('MLA%20Document%20Library')/items?$filter=MLA_x0020__x0023_%20eq%20%27MLA-003%27"
	
	 $.ajax({

                   url: endPointUrl,
                   method: "GET",
                   headers: { "Accept":  "application/json; odata=verbose","Content-Type":"application/json; odata=verbose" },
                   success: function  (data) {					   
					  
				   var results = data.d.results                     						
						if(results.length > 0){						
							initializeVariables(results);						
						}						
                  },
                  error: function  (data) {
                      alert("Error: "+ data);
                 }
          }); 
}
f1()
</script>