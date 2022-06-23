const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor=>{
  Academic = nEditor
})



function toggle(){
    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
           <div class="hero">
            <h1>${inputfields["name"].value}</h1>
            <h3>${inputfields["title"].value}</h3>
           </div>
           <div class="main">
               <div>
                 <h3>OBJECTIVE</h3>
                 <p>${inputfields["objective"].value}</p>
                 <h3>SKILLS</h3>
                 <p>${inputfields["skills"].value}</p>
                 <h3>ACHIEVEMENTS</h3>
                 <p>${inputfields["achievements"].value}</p>
                 <h3>CONTACT</h3>
                 <p>${inputfields["contact"].value}</p>
               
                <h3>WORK EXPERIENCE</h3>
                ${workExpdetails.getData()}
                <h3>ACADEMIC DETAILS</h3>
                 ${Academic.getData()}
                <h3>PROJECTS</h3>
                <p>${inputfields["projects"].value}</p>
               </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}