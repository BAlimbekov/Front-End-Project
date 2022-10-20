const $inputBar = $("#input")
$("#button").on("click", function(){
    event.preventDefault()
    console.log($inputBar.val())
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + $inputBar.val()) 
         .then(response => response.json())
         .then (result => {
            console.log(result[0])

           $(".divOutputDic")[0].innerText = result[0].meanings[0].definitions[0].definition

         });
     });
foxImage();
function foxImage() {  
$(".button").on("click", function(){


    fetch("https://randomfox.ca/floof/")
        .then(response => response.json())
        .then(result => {
            $(".image")[0].src = result.image})
            setTimeout(()=>{
                fetch("https://randomfox.ca/floof/")
                .then(response => response.json())
                .then(result => {
                    $(".image")[0].src = result.image})
            }, "2000");    

});
}
