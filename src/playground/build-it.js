
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibilty = this.toggleVisibilty.bind(this);
        this.state = {
            visibilty: false
        }
    }

    toggleVisibilty() {
        this.setState((prevState) => {
            return {
                visibilty: !prevState.visibilty
            }
        })
    }

    render() {
        return (
          <div>
              <h1>Visibility toggle</h1>
              <button onClick={this.toggleVisibilty}>{this.state.visibilty ? "Hide details" : "Show details"}</button>
              {this.state.visibilty && (
                 <div>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, sunt.</p>
                 </div>
             )}
          </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));


// let visibilty = false;
//
// const toggleVisibilty = () => {
//   visibilty = !visibilty;
//   render();
// };
//
// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibilty}>{visibilty ? "Hide details" : "Show details"}</button>
//             {visibilty && (
//                 <div>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, sunt.</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// };
//
// render();
