import BaseLayout from '../components/layouts/BaseLayout'

class SuperComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.someVariable = 'Just some variable'
    }
    alertName(title) {
        alert(title)
    }

    render() {
        return (
            <BaseLayout>
                <h1> This is the Blogs Page</h1>
            </BaseLayout>
        
        )
    }
}

export default SuperComponent