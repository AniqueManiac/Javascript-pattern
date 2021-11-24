var n = 15;
string = "";

for(i = 0; i<=n+1 ; i++){

  if(i<=(n+1)/2){
    for(k = n ; k >=i ;k--){
        string += " ";
    }
    i++;
    for(j = 1 ; j <=i ; j++){ 
        string += "x ";
    }
  }else{
       // console.log("d");
        for(k = 1 ; k <=i ; k++){
            string += " ";
        }
  
        i++;
        for(j = n+2 ; j >=i ; j--){ 
            string += "x ";
        }

  }  
   string += "\n";
}
console.log(string);
