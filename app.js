marked.setOptions({
    breaks:true
});


class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'# This is my Markdown Previewer\n## About me\n**My CodePen profile:** [rk-2401](https://codepen.io/rk-2401/)'+'\n## `cout<<"Go! check my Pens!!!";` \n ## My Skills:\n    HTML CSS JS\n- JQuery\n- BootStrap\n- React\n- Redux\n#### My Motto is:\n>## Never give up!\n![github](data:image/png;base64,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)'
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({text:e.target.value});
        
        }
    
    
    render(){
        const {text}=this.state;
        const markdown=marked(text);
        
        return(
            <div id="outer-most" className="container">
                <h1 className="text-center">Markdown Previewer</h1>
                <div id="col-div">
                    <div>
                    <h3>Markdown:</h3>
                    <div id="div1" className="col-6" >
                        <textarea id="editor" onChange={this.handleChange} value={this.state.text} ></textarea>
                    </div>
                    </div>
                    <div>
                        <h3>Preview:</h3>
                    <div className="col-6" id="preview" dangerouslySetInnerHTML={{__html:markdown}}>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <Editor/>,
    document.getElementById('root')
  );
  /*

    <h1 >Markdown Previewer</h1>
                <div>
                    <textarea id="editor" onChange={this.handleChange} value={this.state.text} placeholder="hello!!!"></textarea>
                </div>
                <div  id="preview">
                    <p>hello</p>
                </div>
            */