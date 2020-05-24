/**
 * 联合类型
 * 联合类型与交叉类型类似，都可以拥有多个类型的能力  用于限制传入的值的类型只能是 | 分隔的每个类型
 * 如果一个值是联合类型，那么我们只能访问它们中共有的部分（共有的属性与方法），即相当于一种 交 的关系
 * 主要区别是：
 *  1.联合类型一次只能一种类型；
 *  2.而交叉类型每次都是多个类型的合并类型。
 */
{
    var a = 'a';
    var b = void 0;
    var c = void 0;
}
{
    var me = void 0;
    me = {
        name: 'huatten',
        age: 18,
        love: 'TS'
    };
    console.log(me); //{age: 10, love: "TS", name: "huatten"}
    console.log(me.name); //Error
    console.log(me.age); //OK
    console.log(me.love); //Error
}
{
    // function area(s: Shape) {
    //   switch (s.kind) {
    //     case "square":
    //       return s.size * s.size;
    //     case "rectangle":
    //       return s.width * s.height;
    //   }
    // }
    // area({ kind: "circle", r: 10 }) //undefined
    // 1.指定返回值类型
    // function area(s: Shape): number {
    //   switch (s.kind) {
    //     case "square":
    //       return s.size * s.size;
    //     case "rectangle":
    //       return s.width * s.height;
    //   }
    // }
    // area({ kind: "circle", r: 10 }) //error
    //2.Never类型
    function area(s) {
        switch (s.kind) {
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.width * s.height;
            case "circle":
                return Math.PI * Math.pow(s.r, 2);
            default:
                return (function (e) { throw new Error(e); })(s);
        }
    }
    area({ kind: "circle", r: 10 }); //undefined
}
