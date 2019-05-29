import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

import SuperComponent from '../components/SuperComponent'

class Index extends SuperComponent {
    static async getInitialProps() {
        let userData
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            userData = response.data
            
        }catch(err) {
            console.error(err)
        }
       
        return {initialData: [1,2,3,4], userData}
    }

    constructor(props) {
        super(props)
       
        this.state = {
            title: 'I am Index Page'
        }
        // console.log('constructor')
    }
    componentDidMount() {
        // console.log('ComponentDidMount')
    }
    componentDidUpdate() {
        // console.log('ComponentDidUpdate')
    }
    componentWillUnmount() {
        // console.log('ComponentWillUnmount')
    }
    updateTitle =() => {
        
        this.setState({title: 'I am updated Index Page'})
    }

    render() {
        // const title = this.state.title
        // OR
        const { title } = this.state
        const { userData, initialData } = this.props
        return (
            <BaseLayout>
                <h1>This is Home Page!</h1>
                <h2>{ title }</h2>
                <h2>{ userData.title }</h2>
                <button onClick={ this.updateTitle }>Change Title</button>
            </BaseLayout>
            
        )
    }
    
}

export default Index


{/* <Header title={'I am a Header Component'}> 
<h1>I am header subtitle</h1>
</Header> */}