/**
 * 左侧展现的组件列表
 * 当拖拽组件到工作区的时候，pageBuilder会根据name渲染ElementCollection中定义的对应组件
 * 
 * **/
import { v1 } from 'uuid';
import ElementCollection from '../../../src/index'
let componentsKeys = Object.keys(ElementCollection);
export default [
  {
    name: "组件分组1",
    id: v1(),
    components: componentsKeys.map(item =>  {
      return {
        name:item,
        title:item,
        id:v1()
      }
    })
  }
];
