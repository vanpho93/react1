
var Note = React.createClass(
  {
    getInitialState: function(){
      return {soHocVien: 20}
    },
    addStudent: function(){
      var num = this.state.soHocVien;
      this.setState({soHocVien: num + 1})
    },
    handleClick: function(){
      var msg = this.props.txt + this.props.khaiGiang + this.props.gia;
      alert(msg);
    },
    render: function(){
      var that = this;
      return(
        <div className="note">
          <p>{this.props.txt}</p>
          <p>Khai giang ngay: {this.props.khaiGiang}</p>
          <Gia price={this.props.gia}/>
          <p>So hoc vien: {this.state.soHocVien}</p>
          <button onClick={this.handleClick}>Get info</button>
          <button onClick={this.addStudent}>Them hoc vien</button>
        </div>
      )
    }
  }
);

var Form = React.createClass(
  {
    render: function(){
      return (
        <div>
          <input type="text"/>
          <button>Chao</button>
        </div>
      )
    }
  }
);

var Gia = React.createClass({
  getInitialState: function(){
    return {num: 0};
  },
  add: function(){
    var num1 = this.state.num + 1;
    this.setState({num: num1});
  },
  render: function(){
    return (
      <div>
        <p>{this.props.price}</p>
        <button onClick={this.add}>{this.state.num}</button>
      </div>
    )
  }
});

ReactDOM.render(
  <div>
    <Note txt="NodeJS" khaiGiang="30/10" gia="100"/>
    <Note txt="ReactJS" khaiGiang="10/10" gia="200"/>
  </div>,
  document.getElementById('root')
);
