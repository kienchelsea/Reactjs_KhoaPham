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
class Interval extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hinhmoi: 1 };
    }
    changeImage = () => {
        this.setState({hinhmoi: (this.state.hinhmoi % 5) + 1});
    }
    render()  {
        return(
            <img class = "anhmoi" src = {"images/" + this.state.hinhmoi + ".jpg"} />
        )
    }
    componentDidMount(){
        setInterval(this.changeImage, 1000);
    }
}
class Note extends React.Component {
    render() {
        return(
            <div>
              <img class = "newpicture" src = {this.props.src} />
              <p>{this.props.children}</p>
            </div>
        ) 
    }
}
class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = { array: [
            {srcHinh: "images/3.jpg", content: "Hello Friend"},
            {srcHinh: "images/4.jpg", content: "Hi Friend"},
            {srcHinh: "images/5.jpg", content: "Hello Bro"}  
        ]};
    }
    add = () => {
        this.state.array.push("ReactJS", "NodeJS");
        this.setState(this.state)
    }
    render() {
        return(
            <div>
                <button onClick = {this.add}>Thêm</button>
                {
                this.state.array.map(function(everyone, index){
                    return <Note key = {index} src={everyone.srcHinh}>{everyone.content}</Note>
                })
               
                }
            </div>
        )
    }
}


ReactDOM.render(
    <div>
        
        <List/>
        {/* <Interval />
        <KienLe />
        <TungDuong /> */}
    </div>
    , document.getElementById('newRoot')
)