var that;
var Note = React.createClass({
  remove(){
    $.get(`/api/delete/${this.props.id}`, data => {
      if(data == 1){
        var removeId = that.state.mang.findIndex(e => this.props.id==e.id);
        that.state.mang.splice(removeId, 1);
        that.setState(that.state);
      }
    });
  },
  render(){
    var {children, id} = this.props;
    return (
      <div>
        <p>{children}</p>
        <button onClick={this.remove}>Xoa</button>
        <button>Sua</button>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState(){
    that = this;
    return {mang: []}
  },
  render(){
    var {mang} = this.state;
    return (
      <div>
        <NoteForm/>
        {
          mang.map(e => <Note key={e.id} id={e.id}>{e.note}</Note>)
        }
      </div>
    );
  },
  componentDidMount(){
    $.get('/api/getNote', data => {
      this.state.mang = data;
      this.setState(this.state);
    });
  }
});

var NoteForm = React.createClass({
  add(){
    $.get(`/api/insert/${this.refs.txt.value}`, data => {
      that.state.mang.push(data);
      that.setState(that.state);
      this.refs.txt.value = '';
    });
  },
  render(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <br/><br/>
        <button onClick={this.add}>Them</button>
      </div>
    );
  }
});
ReactDOM.render(<List/>, document.getElementById('root'));
