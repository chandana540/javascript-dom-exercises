function count()
{
     var chairs=document.getElementsByClassName("chairs");
     console.log(chairs);
     for(var i=0;i<chairs.length;i++)
     {
        // console.log(chairs[i].style.display="none")
      chairs[i].addEventListener("click",fn1)
        var occ=document.getElementById("occ")
        var ava=document.getElementById("ava")
        var totalchairs=6;
        occ.innerHTML=0;
        ava.innerHTML=totalchairs-occ.innerHTML;
      function fn1(e)
       {
            occ.innerHTML++;
        
            
            ava.innerHTML=totalchairs-occ.innerHTML;
            if(occ.innerHTML>totalchairs)
            occ.innerHTML=0;
      
            //e.target.
          if(e)
           e.target.classList.toggle('occupied');

        }
        
        //console.log(chairs[i])
      //   if(e)
    
      
      //  console.log( e.target.style.backgroundColor="red")
      //   }
        


     }
 
// chairs[i].addEventListener("click",fn1)
// function fn1(e)
// { 
//     occupied=0;
//     available=1;
//     if(e)
//     {
//         occupied++;
//         available--;
//     }

//}

}