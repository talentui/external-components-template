const prefixAdder = (rawObj) => {
    let keys = Object.keys(rawObj || {});
    let obj  = {};
    let prefix = `App${process.env.appId}`;
    for (let i = 0; i < keys.length; i++) {
        obj[`${prefix}_${keys[i]}`] = rawObj[keys[i]];
    }
    return obj;
};
export default prefixAdder;