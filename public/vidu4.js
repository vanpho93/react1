var Note = React.createClass({
  render(){
    var {children, id} = this.props;
    return (
      <div>
        <p>{children}</p>
        <button>Xoa</button>
        <button>Sua</button>
      </div>
    );
  }
});

var List = React.createClass({
  getInitialState(){
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
  render(){
    return (
      <div>
        <input type="text" ref="txt" placeholder="Enter your note"/>
        <br/><br/>
        <button>Them</button>
      </div>
    );
  }
});
ReactDOM.render(<List/>, document.getElementById('root'));
