var container=document.getElementById("container")
var box=document.getElementsByClassName("box")
var like=document.getElementsByClassName("like")
var totalprice=document.getElementById("totalprice")
 
let total=0
for(let i=0;i<box.length;i++){
    let bx=box[i]
    let plus=bx.getElementsByClassName("btn1")[0]
    let minus=bx.getElementsByClassName("btn2")[0]
    let Delete=bx.getElementsByClassName("delete")[0]
    let quantity=bx.getElementsByClassName("quantity")[0]
    let price=parseInt(bx.getElementsByClassName("price")[0].innerText.substring(1))

    plus.addEventListener("click",()=>{
        quantity.value++
        total+=price
        totalprice.innerText=`total price : $${total}`
    })
    minus.addEventListener("click",()=>{
        if (quantity.value > 1){
            quantity.value--
            total-=price
            totalprice.innerText=`total price : $${total}`
        }
       
        
    })

    Delete.addEventListener("click",()=>{
        bx.remove()
        total-=price*quantity.value
        totalprice.innerText=`total price : $${total}`
    })

    
    
}
$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o")})

