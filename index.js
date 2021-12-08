var readline=require("readline-sync")
score=0



var userName=readline.question("Enter your name ")
console.log("hey welcome ",userName,"\nplay this game and check your knowledge about international realtion")



function play(question,answer){
    var Answer=readline.question(question);
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('Right')
        console.log("----------")
        score+=1
    }else{
        console.log('Wrong')
        console.log("----------")
    }
};



var questi = [{
  question: "Where do i live currently. \n1.Dharamshala \n2. Nagpur \n3. Mumbai \n4.Delhi  \n",
  answer: '1'
}, {
  question: "What I am studying presently. \n1. Software Proggramming  \n2. Engineering \n3. Arts  \n4. Medical\n",
  answer: '1'
}, {
  question: "What is my education qualification. \n1. 12th \n2. Graduation  \n3. Post-Graduation  \n4.Doctrate \n",
  answer: '2'
}, {
  question: "what I love most to do. \n1. Reading \n2. Roaming \n3. Playing \n4.Riding \n ",
  answer: "1"
}];

// Use Loop for call function

for (var i=0;i<questi.length;i++){
    var queslist=questi[i]
    play(queslist.question,queslist.answer)
};

// For Print Output

console.log(userName,"Your final Score is ",score)
