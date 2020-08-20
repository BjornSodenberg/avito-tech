export default class PostService {
    _apiBase = `https://boiling-refuge-66454.herokuapp.com/images/`;

    //getting data from AIP
    //url == null - get posts
    //url !== null - get images
    getData = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }

    getPosts = async () => {
        const res = await this.getData('');
        return res.map(this._transformPost);
    }

    _transformPost = (post) => {
        return {
            id:post.id,
            url: post.url
        }
    }

}