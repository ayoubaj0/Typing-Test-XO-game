let tabtexts = ["What you have accomplished in the past is a much stronger example than talking about what you are capable of doing in the future. Actions do speak louder than words!",
                "Draw inspiration from other people's lives The inspiring example of the people you admire is a great place to start with",
                "Be careful how you live; you may be the only Bible some people ever read",
                "May we all become teachers of peace, and teach in the only way possible",
                "Around the age of one your child begins to imitate you with intent, they actively observe how you behave and seek clues in order to determine how they themselves should behave - that's a lot of pressure on you!",
                "One of the best ways to teach a child anything is by doing it yourself. Leading by example requires no scolding or complicated instructions. Your child will see what you do and copy it.",
                "Children also catch a lot by way of example. If parents are disrespectful, children will catch it like a cold. If parents are gracious, children will bask in it like the beach on a sunny day.",
                "It is difficult to bring people to goodness with lessons, but it is easy to do so by example.",
                "If I can help people I'll do it by giving them a chance to help themselves; and if I can uplift or inspire, let it be by example, inference and suggestion, rather than by injunction and dictation.",
                "If you want to know how to be successful don't take the advice of others, watch successful people and see what they do, then do the same.",
                "Whatever the problem is, someone has handled the same dissatisfaction and sculpted it into an example of greatness.",
            ]


let text=document.getElementById("text");
let needtext=true;
let randomText="";
function aficherRandomText(){
    randomText=tabtexts[Math.floor(Math.random() * tabtexts.length)]
    text.innerHTML=randomText;
}
aficherRandomText()

let numberWords=0;
let Words=0
let numberChars=0;
let Chars=0
let numberMistakes=0
let mistakes=0
let typingtext=document.getElementById("typing");
typingtext.addEventListener("input",()=>{
    mistakes=0
    Words=0;
    Chars=0;
    let chars = typingtext.value
    const textContent = randomText;
    let newText = '';
    
    for (let i = 0; i < textContent.length; i++) {
        if(chars[i]==undefined){
            newText+=textContent[i]
        }
        else if(textContent[i]==chars[i]){
            newText+='<span style="color: #14a7a0;">'+ textContent[i] + '</span>'
        }
        else{
            //text-decoration: line-through;
            textContent[i]==" " ? red="background-color":red="color"
            newText+="<span style='"+red+": red;'>"+ textContent[i] + "</span>"
        } 
      }
    for (let i = 0; i < textContent.length; i++){
        if(textContent[i]!==chars[i] && chars[i]!==undefined){mistakes++}
    } 
    text.innerHTML = newText;
    Chars += chars.length;
    Words+=chars.split(" ").length-1
    if(textContent.length<=chars.length){
        numberWords+=Words
        Words=0
        numberChars +=Chars
        Chars=0
        numberMistakes += mistakes;
        mistakes=0
        typingtext.value = ''
        aficherRandomText() ;
    }
  }
)
  

let firstclick=true;
function start() {
    if(firstclick==true){
        firstclick=false;
        time = 60;
        count  = setInterval(() => {
                     if (time == 0) {resultat();}
                     else {
                        time--;
                        document.getElementById("time").innerText = time ; 
                        document.getElementById("words").innerText =numberWords+Words
                        document.getElementById("chars").innerText =numberChars+Chars
                        document.getElementById("mistakes").innerText =numberMistakes+mistakes  
                    }
                }, 1000);
    }                 
};

function resultat(){
    let tabResultat=document.getElementById("finalresultat")
    tabResultat.style.display="flex"
    document.getElementById("wordsmin").innerText =numberWords+Words
    document.getElementById("charsmin").innerText =numberChars+Chars
    document.getElementById("accuracy").innerText =Math.floor(100-(numberMistakes+mistakes)/(numberChars+Chars)*100)
}
/*play again*/ 
document.getElementById("playagain").addEventListener("click", function(){
    location.reload();
});