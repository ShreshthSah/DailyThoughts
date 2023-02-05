import axios from "axios"
// const api_url ="https://zenquotes.io/api/quotes/";



export class UserService{

    

  

    static users=[

    ]
   
    static getAllUsers(){
        let dataURL=`https://type.fit/api/quotes`
        return axios.get(dataURL)
     
 
    }
    static getwallpaper(){
        let url=`https://source.unsplash.com/random`
        return axios.get(url)
    }
}