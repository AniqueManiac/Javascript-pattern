var n = 7;
string = "";

for(i = 0; i<=n ; i++){
  for(k = 0 ; k <=i ;k++){
      string += " ";
  }

        i++;
        for(j = n ; j >=i ; j--){ 
            string += "x ";
        }
   
   string += "\n";
}
console.log(string);
