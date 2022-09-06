let busca = document.querySelector(".busca");
busca.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let url = "https://www.google.com/search?q= " + busca.value;
        window.open(url, "_self");
    }
})
// panel 1

const panel1 = document.getElementById("panel1")
var pagina ="https://www.twitch.tv/auronplay"
function AbrirPagina(){
    window.open(href=pagina, height=570,width=520);
}
panel1.addEventListener("click", AbrirPagina)

// panel 2 

const panel2 = document.getElementById("panel2")
var pagina2 ="https://www.twitch.tv/juansguarnizo"
function AbrirPagina2() {
   window.open(href=pagina2, height=570,width=520);
}
panel2.addEventListener("click", AbrirPagina2)

// panel 3
const panel3 = document.getElementById("panel3")
var pagina3 = "https://www.google.com/search?q=traductor&rlz=1C1OKWM_esPE1017PE1017&sxsrf=ALiCzsYfgk5vM6ZzjfZFJ_n9TR_lJMNJtA%3A1660691212254&ei=DCP8YpKYD8L25OUPyZWSgAY&ved=0ahUKEwiSzqbuvMz5AhVCO7kGHcmKBGAQ4dUDCA4&uact=5&oq=traductor&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgjECcyCggAELEDEIMBEEMyBAgAEEMyBAgAEEMyCggAELEDEIMBEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwE6BwgjEOoCECc6BQgAEIAEOhAILhCxAxCDARDHARDRAxBDSgQIQRgASgQIRhgAULUJWMUSYPcTaAFwAXgAgAG_AYgBjwiSAQMxLjeYAQCgAQGwAQrAAQE&sclient=gws-wiz"
function AbrirPagina3() {
   window.open(href=pagina3, height=570,width=520);
}
panel3.addEventListener("click", AbrirPagina3)

// botones

const bton1 = document.getElementById("Gmail")
var irmail ="https://www.gmail.com"
function gomail() {
   window.open(href=irmail, height=570,width=520)}

   bton1.addEventListener("click", gomail)

//    boton de youtube

const bton2 = document.getElementById("Yt")
var iryutu ="https://www.youtube.com"
function gotube() {
   window.open(href=iryutu, height=570,width=520)}

   bton2.addEventListener("click", gotube)

// panel con expansor

   const fast = document.getElementById("fastcom")
var irfast ="https://www.fast.com"
function gofast() {
   window.open(href=irfast)}

   fast.addEventListener("click", gofast);



   const what = document.getElementById("wweb")
   var irwhat ="https://web.whatsapp.com"
   function gowhat() {
      window.open(href=irwhat)}
   
      what.addEventListener("click", gowhat);


      const twitt = document.getElementById("twitter")
      var irtwitt ="https://www.twitter.com"
      function gotwitt() {
         window.open(href=irtwitt, height=570,width=520)}
      
         twitt.addEventListener("click", gotwitt);