var Note = React.createClass(
  {
    render: function(){
      return(
        <div>
          <p>Khoa Pham</p>
          <p>Khoa Pham</p>
        </div>
      )
    }
  }
);

ReactDOM.render(
  <Note/>,
  document.getElementById('root')
);

ReactDOM.render(
  <p>hello</p>,
  document.getElementById('root2')
);
