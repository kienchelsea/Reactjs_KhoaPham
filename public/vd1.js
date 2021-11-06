var list;
class Note extends React.Component {
    render() {
        return (
            <div className="note">{this.props.children}</div>
        )
    }
}
function addDiv() {
    ReactDOM.render(<InputDiv />, document.getElementById("add-div"));
}
class List extends React.Component {
    constructor(props) {
        super(props)
        list = this;
        this.state = { mang: ["Hi", "Hello", "KienLe"] };
    }
    getState(){
        
        this.setState({mang : this.state.mang});
    }
    render() {
        return (
            <div className="list">
                <div id="add-div"></div>
                    <button onClick={addDiv}>Thêm</button>
                    {
                        this.state.mang.map(function (node, index) {
                            return <Note key={index}>{node}</Note>
                        })
                    }
                
            </div>
        )
    }
}
class InputDiv extends React.Component {
    send = () => {
        list.setState({mang : list.state.mang.concat(this.refs.txt.value)});
        ReactDOM.unmountComponentAtNode(document.getElementById("add-div"));
    }
    render() {
        return (
            <div>
                <input type="text" ref="txt" placeHolder="Nhập vào đây"></input>
                <button onClick={this.send}>Send</button>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <List />
    </div>
    ,
    document.getElementById("newPage")
)