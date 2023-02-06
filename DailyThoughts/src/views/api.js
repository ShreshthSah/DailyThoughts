import {axios} from axios

const getdata=(param={})=>{
  axios.get(`https://source.unsplash.com/random`,{

    params:{

        _page:params.page,

    }
  
  })
}

export default getdata;