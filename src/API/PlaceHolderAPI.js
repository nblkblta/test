import axios from "axios";
export default class PlaceHolderAPI {
    static fetchPosts(postsOnPageLimit, currentPage){
        return axios.get('https://jsonplaceholder.typicode.com/posts', { params:{
            _limit: postsOnPageLimit,
            _page: currentPage,
        }})
    }
}
