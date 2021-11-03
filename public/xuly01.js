class KienLe extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 };
    }
    add = () => {
        this.setState({ number: this.state.number + 1 });
    }
    render() {
        return (
            <button onClick={this.add} className="vang">Hello {this.state.number}</button>
        )
    }
}
class TungDuong extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hinh: 1 };
    }
    next = () => {
        this.setState({hinh: this.state.hinh == 5 ? 5:this.state.hinh + 1});
    }
    back = () => {
        this.setState({hinh: this.state.hinh == 1 ? 1:this.state.hinh - 1});
    }
    render() {
        return (
            <div className = "album">
                <img className = "anh" src = {"images/" + this.state.hinh + ".jpg"}/>
                <button onClick = {this.next}>Next</button>
                <button onClick = {this.back}>Back</button>
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        <h1>KienLe Traning</h1>
        <KienLe />
        <TungDuong />
    </div>
    , document.getElementById('newRoot')
)