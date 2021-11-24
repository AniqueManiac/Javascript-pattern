var n = 9;
string = "";

for(i = 0; i<=n ; i++){
  for(k = n+2 ; k >=i ;k--){
      string += " ";
  }

        i++;
        for(j = 1 ; j <=i ; j++){ 
            string += "x ";
        }
   
   string += "\n";
}
console.log(string);
