var n = 5;
string = "";

for(i = 0; i<=n-1 ; i++){
  for(k = 0 ; k <=i ;k++){
      string += " ";
  }

        //i++;
        for(j = n-1 ; j >=i ; j--){ 
            string += "x ";
        }
   
   string += "\n";
}
console.log(string);
