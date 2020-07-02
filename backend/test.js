const fetch = require('node-fetch');
const {
    parse,

} = require('node-html-parser')
const cheerio = require('cheerio')

//  fetch('https://ece.ut.ac.ir/academic-staff').then(response => {
//     //  console.log('response',response)
//     response.text()
//         .then(body => {        
            // const root = parse(body);
            // const tdTag = root.querySelectorAll('tr h3')
            // const myList = [];
            // tdTag.forEach((elm , index) => {
            //     const temp = elm.querySelector('a')
            //     myList.push(temp.childNodes[0].rawText.split('&')[0])
            // });
            // return myList
//      })
//      .then(myList=>{
//          console.log(myList[2])
//          console.log(unescape('%u0645%u062D%u0645%u062F%20%u0639%u0644%u06CC%20%u0627%u062E%u0627%u0626%u06CC'))

//         fetch(`https://rasm.io/q/${encodeURI(myList[2])}`)
//         .then((result) => {

//             result.text()
//             .then(res=>{
//                 console.log(res)
//             })   
//         }).catch((err) => {
//             console.log(err)
//         });
//      })

// })





fetch('https://rasm.io/person/68328389 ')
    .then(response => {
         console.log('response',response)
        response.text()
            .then(body => {
                const root = parse(body);
                const Company = root.querySelector('.app-item__title')
                const description = root.querySelector('.app-details__description')
                const Side = root.querySelector('.app-item__subtitle')
                const NationalـCode = root.querySelector('.cover-header__title-subtitle')
                const myList = [];
                console.log(Company.text)
                console.log(description.text)
                console.log(Side.text)
                console.log(NationalـCode.text)
                return myList
            })
    })
    