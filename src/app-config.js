/*
 * @Author: crack
 * @Date:   2017-07-03 10:57:24
 * @Last Modified 2017-08-23
 * @Last Modified time: 2017-08-23 18:53:29
 */
import 'babel-polyfill'
//本注释用于触发ci 重新编译 version:0.0.45
// const sagaMiddleware = createSagaMiddleware()
export default {
    el: 'bs-main',
    // middlewares: [thunk, sagaMiddleware],
    // afterCreateStore: () => {
    //     sagaMiddleware.run(rootSaga);
    // }
}