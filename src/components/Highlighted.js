import React, { Component } from 'react';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

class Highlighted extends Component {
    componentDidMount() {
        hljs.initHighlightingOnLoad();
        let current = this.el;
        hljs.highlightBlock(current);
    }

    componentDidUpdate(){
        let current = this.el;
        hljs.highlightBlock(current);
    }

    render() {
        let chosenSample = this.props.samples[this.props.currentIndex];
        return (
            <div>
                <pre><code
                    className="javascript"
                    ref={el => this.el = el}
                >{chosenSample}</code></pre>
            </div>
        );
    }
}


export default Highlighted;