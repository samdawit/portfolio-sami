import BaseLayout from '../components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import axios from 'axios'

class Portfolio extends React.Component {
    static async getInitialProps({query}) {
        const portfolioId = query.id
        let portfolio = {}
        try {
            const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`)    
            portfolio = response.data
        } catch (err) {
            console.error(err)
        }
       
        return { portfolio }
    }
    

    render() {
        const { portfolio } = this.props
        console.log(portfolio.title)
        return (
            <BaseLayout>
                <h2>{portfolio.title}</h2>
                <p>Body: {portfolio.body}</p>
                <p>Id: {portfolio.id}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio)