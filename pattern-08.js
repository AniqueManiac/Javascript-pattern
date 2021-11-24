var n = 11;
string = "";

for(i = 0; i<=n ; i++){

if(i <= (n+1)/2 ){
  
    for(k = n+2 ; k >=i ;k--){
        string += " ";
    }
         // i++;
    for(j = 1 ; j <=i ; j++){ 
              string += "x ";
     }

}else{
    for(k = -1 ; k <=i ;k++){
        string += " ";
    }
  
         // i++;
          for(j = n ; j >=i ; j--){ 
              string += "x ";
          }
}

   
   string += "\n";
}
console.log(string);
