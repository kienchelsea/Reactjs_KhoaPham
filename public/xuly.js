
function getName(name) {
    alert(name)
}
// console.log(React)
class KhoaPham extends React.Component {
    constructor(props){
        super(props)
        this.state = { totalStudent: '10' };
        this.addstudent = this.addstudent.bind(this);
    }
    laythongtin() {
        alert(this.props.children);
    }
    addstudent() {
        this.setState({ totalStudent: this.state.totalStudent + 1 });
    }
    render() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.hocvien}</h1>
                <div>So hoc vien: {this.state.totalStudent}</div>
                <p>{this.props.children}</p>
                <KienLe />
                <button onClick={() => { var str = this.props.ten + ' ' + this.props.hocvien; getName(str) }}>Thong tin</button>
                <button onClick={this.addstudent}>addStudent</button>
            </div>
        )
    }
};
class KienLe extends React.Component {
    render() {
        return (
            <div>
                <h3> KienLe Chelsea lap trinh reactjs </h3>
            </div>
        )
    }
};
class InputTag extends React.Component {
    show = () => {
        var text = this.refs.s1.value;
        alert(text);
    }
        render() {
            return (
                <div>
                    <select ref = "s1">
                        <option value = "a">AAA</option>
                        <option value = "b">BBB</option>
                        <option value = "c">CCC</option>
                    </select>
                    <input type = "text" ref = "txt" />
                    <button onClick = {this.show}>Click here</button>
                </div>
            )
        }
}
ReactDOM.render(
    <div>
         <InputTag />
        <h1 className="mauvang"> Khoa Pham </h1>
        <KhoaPham ten="JS" hocvien="Mr Kien">Cuộc sống bon chen that</KhoaPham>
        <KhoaPham ten="HTML" hocvien="Mr Kien">Cuộc sống bon chen qua</KhoaPham>

        <KhoaPham ten="NODEJS" hocvien="Mr Kien">Cuộc sống bon chen</KhoaPham>
       
    </div>
    , document.getElementById("root")
);