var that;
var Note = React.createClass({
  remove(){
    var arr = that.state.mang;
    arr.splice(arr.indexOf(this.props.children), 1);
    that.state.mang = arr;
    that.setState(that.state);
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
        <button onClick={()=>{this.props.handle(this.refs.txt)}}>Them</button>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState(){
    that = this;
    return {isAdding: false, mang: ["Android", "Node", "iOS", "PHP"]}
  },
  add(inputObj){

    this.state.mang.unshift(inputObj.value);
    this.state.isAdding = false;

    this.setState(this.state)
    inputObj.value = '';
  },
  toggle(){
    this.state.isAdding = true;
    this.setState(this.state);
  },
  render(){
    var xhtml;
    if(this.state.isAdding){
      xhtml = <InputForm handle={this.add}/>
    }else{
      xhtml = <button onClick={this.toggle}>+</button>
    }
    return (
      <div>
        {xhtml}
        {
          this.state.mang.map( e => <Note>{e}</Note> )
        }
      </div>
    );
  }
});

ReactDOM.render(<List/>, document.getElementById('root'));
