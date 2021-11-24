var n = 5;
string = "";

for(i = 0; i<=(n*2)-1 ; i++){

  if(i<=n-1){

   //
   for(k = 0 ; k <=i ; k++){
    string += " ";
}

//i++;
for(j = n-1 ; j >=i ; j--){ 
    string += "x ";
}

   //

  }else{
        
       // x+=2;
        //console.log("d"); 
        for(k = 9 ; k >=i ; k--){
            string += " ";
        }
         
       // i++;
        for(j = 0 ; j <=i-n ; j++){ 
            string += "x ";
        }
    
  }  
   string += "\n";
}
console.log(string);
