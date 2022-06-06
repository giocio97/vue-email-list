const app = new Vue ({
el: "#app",
data:{
    email: [],
    

},
mounted(){
for(i= 0; i < 10; i++){
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
.then((result)=>{
    const listEmail = result.data.response;
    console.log( listEmail); 
    this.email.push(listEmail); 

    
});
}


}
});