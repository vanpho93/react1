var that;
var Note = React.createClass({
  remove(){
    var arr = that.state.mang;
    arr.splice(arr.indexOf(this.props.children), 1);
    that.setState({mang: arr});
  },
  render(){
    return(
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.remove}>Xoa</button>
      </div>
    )
  }
});

var InputForm = React.createClass({
  render(){
    return (
      <div>
        <input type="text" placeholder="Enter your text" ref="txt"/>
        <button onClick={()=>{that.add(this.refs.txt)}}>Them</button>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState(){
    that = this;
    return {mang: ["Android", "Node", "iOS", "PHP"] }
  },
  add(inputObj){
    this.setState({mang: this.state.mang.concat(inputObj.value)})
    inputObj.value = '';
  },
  render(){
    return (
      <div>
        <InputForm/>
        {
          this.state.mang.map( e => <Note>{e}</Note> )
        }
      </div>
    );
  }
});

ReactDOM.render(<List/>, document.getElementById('root'));
