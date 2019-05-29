import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios';
import {Link} from '../routes'


class Portfolio extends React.Component {
    static async getInitialProps () {
        let posts = []
        try {
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
           posts = response.data
        } catch (err) {
            console.error(err)
        }
        return {posts: posts.splice(0,10)}
    }
    renderPost(posts) {
       return posts.map((post, index) => {
            return (
                <li key={index}>
                    <Link route={`/portfolio/${post.id}`} >
                        <a style={{fontSize: '20px'}}>{post.title}</a>
                    </Link>
                </li>
            )
        })
    }
    render() {
        const {posts} = this.props
        
        return (
            <BaseLayout>
                <h1> This is the Portfolios Page</h1>
                <ul>
                 {this.renderPost(posts)}
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolio