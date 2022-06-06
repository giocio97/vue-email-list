const app = new Vue ({
el: "#app",
data:{
    email: 0,
},
mounted(){
axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
.then(function(result){
    const listEmail = result.data.response;
    console.log( listEmail);
});
}
});