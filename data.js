const data ={}
       if(title)  data.title = title
       if(content) data.content = content
       if(category) data.category = category
       if(author) data.author = author
       
       const obKey = Object.keys(data).length
       if((obKey>3 ) && (category.length > 0)){
        dispatch({
            title,
            content,
            category,
            image,
            author,
            popular
        })
       }
       let format = new FormData()
       
       for(let key in postData){
        format.append(key, postData[key])
       }
       console.log(format)
       const response = await axios.post(`http://localhost:8080/api/v1/createpost/`, format)
       console.log(response)