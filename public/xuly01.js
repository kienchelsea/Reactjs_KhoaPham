class KienLe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {number: 0};
    }
    add = () => {
        this.setState({number: this.state.number + 1 }) ;
    }
    render() {
        return (
             <button onClick = {this.add} className = "vang">Hello {this.state.number}</button>
        )
    }
}


ReactDOM.render(
    <div>
        <h1>KienLe Traning</h1>
        <KienLe />
    </div>
   , document.getElementById('newRoot')
)