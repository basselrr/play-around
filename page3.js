/* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>posetion number:</td>'+
        '<td>'+d.position+'</td>'+
        '</tr>'+
    '</table>';
}
 
$(document).ready(function() {
    // Add event listener for opening and closing details
    $('#example').on('click', 'tbody td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
        }
    } );
 
    $('#example').on('requestChild.dt', function(e, row) {
        row.child(format(row.data())).show();
    })
 
    var table = $('#example').DataTable( {
        "ajax": "page3.json",
        paging: false,
        scrollY: 400,
        "rowId": 'id',
        "columns": [
            {
                "className":      'dt-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" },
         { "data": "extn" }
           
        ],
        "order": [[1, 'asc']],
        dom: 'Blfrtip',
        buttons:['createState', 'savedStates']
    } );
 
    table.on('stateLoaded', (e, settings, data) => {
        for(var i = 0; i < data.childRows.length; i++) {
            var row = table.row(data.childRows[i]);
            row.child(format(row.data())).show();
        }
    })
} );

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(typeof "obj" )

const strin =JSON.stringify(obj)
console.log(typeof "strin" )



const arry =[

    {
    "question": "What is the scientific name of a butterfly?",
    "answers": [
    "Apis",
    "Coleoptera",
    "Formicidae",
    "Rhopalocera"
    ],
    "correctIndex": 3
    },
    {
    "question": "How hot is the surface of the sun?",
    "answers": [
    "1,233 K",
    "5,778 K",
    "12,130 K",
    "101,300 K"
    ],
    "correctIndex": 1
    },
    {
    "question": "Who are the actors in The Internship?",
    "answers": [
    "Ben Stiller, Jonah Hill",
    "Courteney Cox, Matt LeBlanc",
    "Kaley Cuoco, Jim Parsons",
    "Vince Vaughn, Owen Wilson"
    ],
    "correctIndex": 3
    },
    {
    "question": "What is the capital of Spain?",
    "answers": [
    "Berlin",
    "Buenos Aires",
    "Madrid",
    "San Juan"
    ],
    "correctIndex": 2
    },
    {
    "question": "What are the school colors of the University of Texas at Austin?",
    "answers": [
    "Black, Red",
    "Blue, Orange",
    "White, Burnt Orange",
    "White, Old gold, Gold"
    ],
    "correctIndex": 2
    },
    {
    "question": "What is 70 degrees Fahrenheit in Celsius?",
    "answers": [
    "18.8889",
    "20",
    "21.1111",
    "158"
    ],
    "correctIndex": 2
    },
    {
    "question": "When was Mahatma Gandhi born?",
    "answers": [
    "October 2, 1869",
    "December 15, 1872",
    "July 18, 1918",
    "January 15, 1929"
    ],
    "correctIndex": 0
    },
    {
    "question": "How far is the moon from Earth?",
    "answers": [
    "7,918 miles (12,742 km)",
    "86,881 miles (139,822 km)",
    "238,400 miles (384,400 km)",
    "35,980,000 miles (57,910,000 km)"
    ],
    "correctIndex": 2
    },
    {
    "question": "What is 65 times 52?",
    "answers": [
    "117",
    "3120",
    "3380",
    "3520"
    ],
    "correctIndex": 2
    },
    {
    "question": "How tall is Mount Everest?",
    "answers": [
    "6,683 ft (2,037 m)",
    "7,918 ft (2,413 m)",
    "19,341 ft (5,895 m)",
    "29,029 ft (8,847 m)"
    ],
    "correctIndex": 3
    },
    {
    "question": "When did The Avengers come out?",
    "answers": [
    "May 2, 2008",
    "May 4, 2012",
    "May 3, 2013",
    "April 4, 2014"
    ],
    "correctIndex": 1
    },
    {
    "question": "What is 48,879 in hexidecimal?",
    "answers": [
    "0x18C1",
    "0xBEEF",
    "0xDEAD",
    "0x12D591"
    ],
    "correctIndex": 1
    }]
  

    const $questionBox= document.getElementById("listy")
//building question list from question array
function buildQuestionList(){

    let html="<ol>"
    for (let qus in arry){
      
        
       
        let $question = '<li id="qus_'+qus+'" >'+arry[qus].question+''
        html+=$question
         html+='<ul>'
         //building answers options for each question (   arry[qus].answers.length = 4 answers for each)
         for (let i=0; i<arry[qus].answers.length; i++){

            
            


           html+= '<li id="list'+qus+i+'" class="qus_'+qus+'"> <input  class="radio_'+qus+'" value="'+i+'" name="qus_'+qus+'" id="rad'+qus+i+'"  type="radio">' + arry[qus].answers[i]+'</li>'


         }

         html+='</ul>'
        // <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
        // <li><input type="checkbox"><span>some text</span></li>

      
        html+= '</li>'


    
        

       
      
    }
    html+="</ol>"
    $questionBox.innerHTML=html

} 
//buildin question list function end here
buildQuestionList()




let i= 1



//     let correctAswerArry=[]

//     for (let answer in arry){

       
//         correctAswerArry.push(arry[answer].correctIndex)
//         $(".qus_${answer}").click(function(){
    
//             let xc= $(this).index()
//             console.log(xc)

        
//     })
//     console.log('correct answers '+correctAswerArry)


// }
    
// correctAnswerList (arry)

// function getSelectedAnswer(correctAswerArry){
//      console.log(arry[answer].correctIndex)
// }


for ( qus in arry){
   

    let nAnswers =arry[qus].answers.length

    for ( let n=0; n< nAnswers; n++){
      
        
       let eyeD = qus.toString()+n.toString()
        
    //  const yu = document.getElementById(eyeD)


   



    

    // console.log(qus)

    // let answerCont = $questionBox.querySelectorAll('.qus_'+qus+'')

    // console.log(answerCont)

    // let myAnswer = (answerCont[qus].querySelector('input[name= qus_'+qus+']:checked')||{}).value


   


}

}
//==========================================================================================

// function $slelectedAnswerArray(){


//     let slelectedAnswerArray=[]
    
    



//     for (qus in arry){
//         var answers = document.querySelectorAll('.'+'radio_'+qus+'' );
    
//         let correctAnswer = arry[qus].correctIndex
//         console.log(correctAnswer)
    
//     for (let myanswer in answers) {
    
       
    
       
    
//       answers[myanswer].onchange = function($slelectedAnswerArray) {
        
//         console.log(this.value)
//         slelectedAnswerArray.push(this.value)
//         console.log(slelectedAnswerArray)
       
//       }
//     }
    
//     }


// }
// function correctAnswerList (arry){

//     console.log(arry)
//     let correctAswerArry=[]

//     for (let answer in arry){

//         correctAswerArry.push(arry[answer].correctIndex)

   
       
     


//     }
//     console.log(correctAswerArry)


// }
// correctAnswerList (arry)
// $slelectedAnswerArray()
//==========================================================================================

function $slelectedAnswerArray(){

    let correctAswerArry=[]

    let slelectedAnswerArray=[]

    let points=0

   
    
    



    for (qus in arry){
        var answers = document.querySelectorAll('.'+'radio_'+qus+'' );
        console.log(answers)
    
        let correctAnswer = arry[qus].correctIndex
        console.log(correctAnswer)
        
    
    for (let myanswer in answers) {
    
       
    
       
    
      answers[myanswer].onchange = function() {
        correctAswerArry.push((arry[myanswer].correctIndex.toString()))
        const resultBox = document.getElementById('result')

        
        let selectANs = this.value
        console.log(correctAnswer)
        console.log(selectANs)
        if (correctAnswer == selectANs ){
            console.log('xxxxcorrect');
            points+=1
            resultBox.textContent =points
        console.log(points)}
           
            else{
            console.log('xxxxxxxxxxxwrong')
            resultBox.textContent = points}

        


        
        
        slelectedAnswerArray.push(this.value)
        
       
      }
    }
    
    }


}
const submitQuz= document.getElementById('submit')

// $slelectedAnswerArray()
submitQuz.addEventListener('click',$slelectedAnswerArray())