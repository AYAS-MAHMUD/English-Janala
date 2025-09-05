console.log("hello world");
const loadLesson =()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res =>res.json())
    .then(data =>displayLesson(data.data))

}
const token = document.getElementById("token");

const loadlevelword=(id)=>{
    // console.log(id);
    token.setAttribute('hidden','class')
    const url =`https://openapi.programming-hero.com/api/level/${id}`;
    // console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data =>getData(data.data))
}

const getData=(data)=>{
    const word_container = document.getElementById("word-container");
    word_container.innerHTML="";
    data.forEach(i=>{
        const card = document.createElement("div");
        card.innerHTML=`
                <div class="bg-white shadow-xl  text-black text-center py-5  my-5  ">
                  <p class="font-bold text-2xl ">${i.word}</p>
                  <p class="my-2">${i.pronunciation}</p>
                  <p class="font-bold">${i.meaning}</p>
                    <div class="flex  justify-between mt-3 px-5">
                    <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn btn-primary"><i class="fa-solid fa-volume-high"></i></button>
                  </div>
                 </div>`
        word_container.appendChild(card);
    });
}
const displayLesson =(lessons) =>{
    const lessonContainer = document.getElementById("lessonContainer");
    lessonContainer.innerHTML="";
    lessons.forEach(lesson =>{
        // console.log(lesson);
        const btndiv = document.createElement("div");
        btndiv.innerHTML=`
        <button onclick="loadlevelword(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>
        `
        lessonContainer.appendChild(btndiv);
    })
}
loadLesson();
