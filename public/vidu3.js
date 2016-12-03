var that;

var Note = React.createClass({
  getInitialState(){
    return {isUpdating: false};
  },
  remove(){
    var arr = that.state.mang;
    arr.splice(arr.indexOf(this.props.children), 1);
    that.state.mang = arr;
    that.setState(that.state);
  },
  update(){
    this.state.isUpdating = true;
    this.setState(this.state);
  },
  render(){
    if(!this.stata.isUpdating){
      return(
        <div>
          <p>{this.props.children}</p>
          <button onClick={this.remove}>Xoa</button>
          <button onClick={this.update}>Sua</button>
        </div>
        )
    }else{
      return(
        <div>
          <input type="text" defaultValue={this.props.children} ref="txt"/>
          <button onClick={this.save}>Luu</button>
          <button onClick={this.cancel}>Huy</button>
        </div>
      );
    }

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
