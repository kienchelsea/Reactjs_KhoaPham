
class KhoaPham extends React.Component {
    laythongtin (){
        alert(this.props.children);
    }
    render() {
        return (
            <div>
                <h1 className="mauvang">{this.props.ten} - {this.props.hocvien}</h1>
                <p>{this.props.children}</p>
                <KienLe />
                <button onClick = {this.laythongtin.bind(this)}>Thong tin</button>
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

ReactDOM.render(
    <div>
        <h1 className="mauvang"> Khoa Pham </h1>
        <KhoaPham ten = "JS" hocvien = "Mr Kien">Cuộc sống bon chen that</KhoaPham>
        <KhoaPham ten = "HTML" hocvien = "Mr Kien">Cuộc sống bon chen qua</KhoaPham>
        
        <KhoaPham ten = "NODEJS" hocvien = "Mr Kien">Cuộc sống bon chen</KhoaPham>

    </div>
    , document.getElementById("root")
);