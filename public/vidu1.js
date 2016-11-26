var Note = React.createClass(
  {
    render: function(){
      return(
        <div>
          <p>{this.props.txt}</p>
          <p>Khai giang ngay: {this.props.khaiGiang}</p>
          <Gia/>
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
  render: function(){
    return <p>100</p>
  }
});

ReactDOM.render(
  <div>
    <Note txt="NodeJS" khaiGiang="30/10"/>
    <Note txt="ReactJS" khaiGiang="10/10"/>
  </div>,
  document.getElementById('root')
);
