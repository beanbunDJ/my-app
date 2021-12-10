import React,{useState} from "react";
import GridLayout from 'react-grid-layout';
import Chart from './components/Chart/index'
import Layoutdefine  from "./components/Layout/index";
import { Add } from './actions';
import { Button,Layout,Tabs } from 'antd';

import './App.css';

function App(props) {
  let [layout,setLayout] = useState(props.store.getState().layout);

  // 随机生成layoutid
  const randomId = num => {
    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let id = '';
    let i = 0;
    while( i <num){
      let index = Math.floor(Math.random()*24);
      id += arr[index];
      i++;
    }
    return id;
  } 

  // 点击添加layout事件
  const addLayout = (type) =>{
    let obj = {x: 0, y: 0, w: 1, h: 2,type: type};
    obj['i'] =randomId(10);
    setLayout([...layout,obj]
    );
    Add(layout);
  }
  
  const { TabPane } = Tabs;
  const Demo = () => (
    <Tabs defaultActiveKey="1" >
      <TabPane tab="布局组件" key="1">
        <ul>
          <li><div className="title">折叠面板</div><div className="pannel-img"><img src="/collapse.jpg"></img></div></li>
          <li><div className="title">标签页</div><div className="pannel-img"><img src="/tabs.jpg"></img></div></li>
          <li><div className="title">左侧栏</div><div className="pannel-img"><img src="/sidebar.jpg"></img></div></li>
        </ul>
      </TabPane>
      <TabPane tab="可视化组件" key="2">
        <ul>
          <li><div className="title">折线图</div><div className="pannel-img" onClick={(event)=>{addLayout(event.target.parentNode.getAttribute('type'))}} type="line"><img src="/line.jpg"></img></div></li>
          <li><div className="title">面积图</div><div className="pannel-img"  onClick={(event)=>{addLayout(event.target.parentNode.getAttribute('type'))}} type="area"><img src="/area.jpg"></img></div></li>
          <li><div className="title">柱形图</div><div className="pannel-img" onClick={(event)=>{addLayout(event.target.parentNode.getAttribute('type'))}} type="bar"><img src="/bar.jpg"></img></div></li>
        </ul>
      </TabPane>
    </Tabs>
  );
  return (
    <div className="content">
      <Demo />
      {/* <Button type="primary" onClick={addLayout} >
        添加元素
      </Button> */}
      <GridLayout className="layout" layout={layout} cols={3} rowHeight={60} width={800} height={400}>
        { layout.map((item,index)=>{
          if(item.module === 'chart')
            return <div key={item.i}><Chart type={item.type?item.type:'area'} index={item.i}/>{index}</div>
          else
            return <div key={item.i}><Layoutdefine type={item.type?item.type:'gridlayout'} index={item.i}/>{index}</div>
          })
        }
      </GridLayout>
    </div>
  )
}

export default App;
