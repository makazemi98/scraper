const fetch = require('node-fetch');
const cheerio = require('cheerio');
const {
    parse
} = require('node-html-parser')
const _ = require('lodash');
const getData = (url) => {
    return new Promise((res, rej) => {
        fetch(url)
            .then(response => {
                response.text()
                    .then(body => {
                        res(body)
                    })
                    .catch(err => {
                        rej({
                            Error: err
                        })
                    })
            })
            .catch(err => {
                rej({
                    Error: `ERROR (${err})`
                })
            })
    })
}

exports.personGet = async (req, res, next) => {
    const personName = req.params.name;
    const page = req.query.page || 1 ;
    console.log('page :::: ',page)
    console.log('********** personName ::::::::: ',personName)
    fetch(`https://rasm.io/api/search?term=${encodeURI(personName)}&page=${page}&pagesize=5`)
    .then((result) => {
        
        result.text()
        .then(body=>{
            console.log(JSON.parse(body))
            const companies = JSON.parse(body).companies.hits.hits;
            const people = JSON.parse(body).people.hits.hits;
            const companiesCount = JSON.parse(body).companies.hits.total.value;
            const peopleCount = JSON.parse(body).people.hits.total.value;
            console.log(companiesCount)

            res.status(201).json({
                msg:{
                    companies,
                    people,
                    companiesCount,
                    peopleCount
                }
            })
        })   
    }).catch((err) => {
        console.log(err)
    });
}

exports.getpeople = async (req, res, next) => {
    fetch('https://ece.ut.ac.ir/academic-staff')
    .then(response => {
        return response.text()
    })
    .then(body => {
        const root = parse(body);
        const tdTag = root.querySelectorAll('tr h3')
        const image = root.querySelectorAll('tr img')
        const myListName = [];
        const myListImage = [];
        tdTag.forEach((elm, index) => {
            const temp = elm.querySelector('a')
            myListName.push(temp.childNodes[0].rawText.split('&')[0])
        });
        image.forEach((elm, index) => {
            console.log(elm.rawAttrs.split(' alt')[0].split('src=')[1].split("'")[1])
            console.log('************************')
            myListImage.push(`https://ece.ut.ac.ir${elm.rawAttrs.split(' alt')[0].split('src=')[1].split("'")[1]}`)

        });
        console.log("myList ::",myListImage)
        const zipped = _.zip(myListName,myListImage)
        console.log(zipped)
        return zipped

    })
    .then((Professors) => {
        console.log(Professors)
        res.status(201).json({
            Professors
        })
    }).catch((err) => {
        res.status(500).json({
            msg:'Not Found !'
        })
    });
}

exports.getProfile = (req,res,next)=>{
    const userId = req.params.id;
    console.log(userId)
    fetch(`https://rasm.io/person/${userId}`)
    .then(response => {
        //  console.log('response',response)
        response.text()
            .then(body => {
                const root = parse(body);
                const Company = root.querySelector('.app-item__title').text
                const description = root.querySelector('.app-details__description').text
                const Side = root.querySelector('.app-item__subtitle').text
                const NationalCode = root.querySelector('.cover-header__title-subtitle').text
                const name = root.querySelector('.cover-header__title h1').text
                console.log(name)
                // console.log(description.text)
                // console.log(Side.text)
                // console.log(NationalـCode.text)
                res.status(201).json({
                    Company,
                    description,
                    Side,
                    NationalCode,
                    name
                }) 
            })
            .catch(err=>{
                console.log(err)
                res.status(400).json({
                    error:err
                }) 
            })
    })
}