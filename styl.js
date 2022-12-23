

/*const pointDOM = document.querySelector('#point')
document.querySelector("#show").onclick = function()
{
    document.getElementById("#point").value="a";
}*/

/*let btn = document.getElementById("home");
btn.onclick=function(){
    let s1 = parseInt(document.getElementById('n1').value);
    let s2 = parseInt(document.getElementById('n2').value);
    let s3 = parseInt(document.getElementById('n3').value);
    let s4 = parseInt(document.getElementById('n4').value);
    let s5 = parseInt(document.getElementById('n5').value);
    let toplam = s1+s2+s3+s4+s5;
    document.getElementById("Toplam").innerHTML="Girilen Sayıların Toplamı : "+toplam;
}*/

    const btn = document.getElementById("home");
    btn.addEventListener("click",(e)=>{
        let s1 = Number(document.getElementById('n1').value);
        let s2 = Number(document.getElementById('n2').value);
        let s3 = Number(document.getElementById('n3').value);
        let s4 = Number(document.getElementById('n4').value);
        let s5 = Number(document.getElementById('n5').value);
  
          console.log(s1);
  
          let toplam = s1 + s2 + s3 + s4 + s5;
        document.getElementById("Toplam").innerHTML ="Toplam Puanınız:"+ toplam;
    });
