var n = 7;
string = "";

for(i = 1; i<=n ; i++){
    if(i<=(n+1)/2)){

        for(j = 1 ; j <=i ; j++){
            string += "x ";
        }
    }else{

        for(j = n ; j >=i ; j-- ){
            string += "x ";
        }
    }

   string += "\n";
}
console.log(string);
