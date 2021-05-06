function Check(){
var n=document.getElementById('inputnumber').value;
var sum = 1;
var temp = n;
for(var i = 2; i<n/2+1; i++){
	if(n%i==0){
		sum+=i;
	}
}
/*var sum = n-1;
var temp = n;
 
for(var i = 2; n>1;)
{
    if(!(n%i))
    {
        sum-=i;
        n=n/i;
    } 
    else i++;
}*/
 
if(sum==n)
    alert("Число: " +temp +" является совершенным");
else
    alert("Число: " +temp +" не является совершенным");}