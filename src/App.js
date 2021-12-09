import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//#region
// const pannel = (
// <div>
//   <h1>FIRST TIME - {name}</h1>
//   <App />
// </div>
// )
// ReactDOM.render(
//   pannel ,
//   document.getElementById('root')
// );

//函数式组件
// function Demo(props){
//   const {id,number} = props;
//   return <h1>FIRST TIME - {id} - {number} - 函数式组件</h1>
// }
// let param = {id:'abc',number:'01'};
// ReactDOM.render(
//   <Demo {...param}/> ,
//   document.getElementById('root')
// );
//#endregion
//类式组件
class Demo1 extends Component{
  //给实例加上state属性
  state = {name:'chestnut',count:0}

  btnref = React.createRef()
  componentDidMount(){
    console.log('组件完成挂载')
  }
  componentWillUnmount(){
    console.log('组件将要被卸载')
  }
  render(){
    const {id,number} = this.props;
    console.log(id,number);
    return (
    <div>
      <h1 onClick={this.test}>FIRST TIME - {this.state.name} - 类式组件</h1>
      <button ref='btn' onClick={this.btnclick('test')}>点击我获取ref</button>
      <button ref={this.btnref} onClick={this.btnclick1}>点击我获取新的ref</button>
      <button onClick={this.unmount}>卸载组件</button>
    </div>)
  }
  unmount = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  test = ()=>{
    this.setState({count:this.state.count+1});
    alert(`你已经点击了${this.state.count}次`);
  }
  btnclick = (arg)=>{
    debugger;
    //event.preventDefault():阻止默认事件
    return (event)=>{
      this.setState({[arg]:event.target.textContent});
      console.log(arg,event);
    }   
  }
  btnclick1 = ()=>{
    debugger;
    console.log(this.btnref.current.textContent);
  }
}

export default Demo1;
