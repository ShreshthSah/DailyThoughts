import axios from "axios"

const getdata=(params={})=>{
  axios.get(`https://source.unsplash.com/random`,{

    params:{

        _page:params.page,

    }
  
  })
}

export default getdata;