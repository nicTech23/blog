const mydata = [
    {
        "_id": "65262298dc2630b973b35bdd",
        "title": "samo",
        "content": "Main man",
        "image": "url",
        "comment": [],
        "category": [
            {
                "name": "news",
                "specific": [
                    "sports",
                    "economy"
                ],
                "_id": "65262298dc2630b973b35bde"
            }
        ],
        "topstory": false,
        "publishdate": "2023-10-11T04:20:40.823Z",
        "__v": 0,
        "author": {
            "_id": "652471d77ab60151e3848ba0",
            "firstname": "samo",
            "lastname": "yaw",
            "username": "yaw",
            "password": "$2a$10$wM47cJp8TuGR2gySxmvWbe3iKMvRiGvmlKlgInAhShn7x10JQdGi6",
            "email": "yawsamo23@gmail.com",
            "createdAt": "2023-10-09T21:34:15.189Z",
            "__v": 0
        }
    },
    {
        "_id": "65261fa4f674d8dad2ed118b",
        "title": "samo",
        "content": "Main man",
        "image": "url",
        "comment": [],
        "category": [
            {
                "name": "news",
                "specific": [
                    "economy"
                ],
                "_id": "65261fa4f674d8dad2ed118c"
            }
        ],
        "topstory": false,
        "publishdate": "2023-10-11T04:08:04.370Z",
        "__v": 0,
        "author": {
            "_id": "652471d77ab60151e3848ba0",
            "firstname": "samo",
            "lastname": "yaw",
            "username": "yaw",
            "password": "$2a$10$wM47cJp8TuGR2gySxmvWbe3iKMvRiGvmlKlgInAhShn7x10JQdGi6",
            "email": "yawsamo23@gmail.com",
            "createdAt": "2023-10-09T21:34:15.189Z",
            "__v": 0
        }
    },
    
]

const newdata = mydata.map(post =>{
    return post.author.firstname
})

console.log(newdata)