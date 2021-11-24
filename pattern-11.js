var n = 9;
string = "";

for(i = 0; i<=(n*2)-1 ; i++){

  if(i<=n){

   //
   for(k = 1 ; k <=i ; k++){
    string += " ";
}

//i++;
for(j = n ; j >=i ; j--){ 
    string += "x ";
}

   //

  }else{
        
       // x+=2;
        //console.log("d"); 
        for(k = n+(n-1) ; k >=i ; k--){
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
