import BSGlobal from './BSGlobal'
import '@talentui/page-templates/dist/main.css'
const staticPath = BSGlobal.staticPath;
if (staticPath !== "/dist/") {
    __webpack_public_path__ = staticPath;
}
 //你在entry.js中
 import React, { Component } from "react";
  /**
  * 必需！！
  * 应用组件
  * 如果项目中使用了页面对代码进行拆分，需要把页面的代码通过this.props.children来访问页面组件
  * 在talent-ui-2.0中如果使用了talent-ui-bootstrap作为项目的entry, 只需要export组件就可以了  version1.1.6
  */
  
 export default class App extends React.Component {
     render() {
         return (
             <div>
                 <div className="content-wrapper">
                     {this.props.children}
                 </div>
             </div>
         );
     }
 }
 
 