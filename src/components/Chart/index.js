import React,{useEffect} from 'react'
import F2 from '@antv/f2';

export default function Chart(props) {
  let type = props.type?props.type:'line';
  
  useEffect(()=>{
    const data = [{
      day: '周一',
      value: 300
    }, {
      day: '周二',
      value: 400
    }, {
      day: '周三',
      value: 350
    }, {
      day: '周四',
      value: 500
    }, {
      day: '周五',
      value: 490
    }, {
      day: '周六',
      value: 600
    }, {
      day: '周日',
      value: 900
    }];
    
    const chart = new F2.Chart({
      id: `myChart${props.index}`,
      pixelRatio: window.devicePixelRatio
    });
    
    chart.source(data, {
      value: {
        tickCount: 5,
        min: 0
      },
      day: {
        range: [ 0, 1 ]
      }
    });
 
    chart.axis('day', {
      label: function label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    });

    //判断图形类别并绘制
    if(type === 'line'){
      chart.line().position('day*value');
      chart.point().position('day*value').style({
        stroke: '#fff',
        lineWidth: 1
      });
    }else if(type === 'area'){
      chart.area().position('day*value');
      chart.line().position('day*value');
    }else if(type === 'bar'){
      chart.interval().position('day*value');
    }
    
    chart.render();
    
  });
  return (
    <div width="100%" height="100%">
      <canvas id={`myChart${props.index}`} width="250" height="120"></canvas>
    </div>
  )
}
