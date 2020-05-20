//1
let s = '1 2 3 4 5'
function handleReverse(s){
    let arr = s.split(''); //转换为数组
    let len = arr.length;
    if(len>1){
        for(let i=0;i<(len-1)/2;i++){ //四个字符，i<1.5,五个字符i<2
            let temp = arr[i];
            arr[i] = arr[len-1-i]; //注意-1
            arr[len-1-i] = temp;
        }
    }
    let str = arr.join(''); //转换为字符串
    console.log(str);
    return str;
  }
  
//2编写程序 expr，以计算从命令行输入的逆波兰表达式的值，其中每个运算符或操作数用一个单独的参数表示。例如，命令 expr 2 3 4 + *
let arr2 = '2 3 4 + *'
function expr(arr){
    let reg=/[\+,\-,\*,\/,\%]/;		//-一定要转义，不然不能识别
    if(arr.length>1){   //length要么1要么一定大于等于3
        for(let i=2;i<arr2.length;i++){  //第一个数一定是数字。
            if(reg.test(arr2[i])){ //判断是否是运算符，
                let x = arr2[i-2]+arr[i]+arr2[i-1];	//拼接字符
                //eval字符串转表达式运算返回运算值
                arr.splice(i-2,3,(eval(x)+'')); //删除i-2到i的三项并用计算值替代
                // console.log(arr[i-2]);
                expr(arr); //直到只有一个数，即得出结果返回
            }
        }
    }
    return arr;
}

//输入值为‘2 3 4 + *’类似的空格分割的表达式字符串
function handleExpr(s){
    let arr = s.split(' ');
    let a = expr(arr); //返回值是数组
    console.log(a[0]);
    return a[0];
}

//3用归并排序将3，1，4，1，5，9，2，6 排序。
let arr3 = [3,1,4,1,5,9,2,6]
function mergeSort (arr3) {
    let len = arr3.length
    if (len < 2) {
        return arr
    }
    let middle = Math.floor(len/2)
    //拆分成两个子数组
    let left =  arr3.slice(0, middle)
    let right = arr3.slice(middle,len)
    //递归拆分
    let mergeSortLeft = mergeSort(left)
    let mergeSortRight = mergeSort(right)
    //合并
    return merge( mergeSortLeft,mergeSortRight)
}
const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
        if (left[0] <= right[0]) {
            result.push(left.shift()); //每次都要删除left或者right的第一个元素，将其加入result中
        } else {
            result.push(right.shift());
        }
    }
    //将剩下的元素加上
    while (left.length) result.push(left.shift());

    while (right.length) result.push(right.shift());

    return result;
};
//4
let arr4 = [{
    "name": "张三",
    "serial": "0001"
  }, {
    "name": "李四",
    "serial": "0002"
  }, {
    "name": "王五",
    "serial": "0003"
  }, {
    "name": "王五2",
    "serial": "0003"
  }, {
    "name": "赵四",
    "serial": "0004"
  }, {
    "name": "小明",
    "serial": "005"
  }, {
    "name": "小张",
    "serial": "006"
  }, {
    "name": "小李",
    "serial": "006"
  }, {
    "name": "小李2",
    "serial": "006"
  }, {
    "name": "赵四2",
    "serial": "0004"
  }];
  function listuniq(arr4) {
    let temp = {}; //存放id
    var result = []; //新数组
    arr4.map((item,index) => {
    if(!temp[item.serial]){    
    result.push(item);
    temp[item.id] = true;
       }
   })
   return result;
  }
// 5 把下面给出的扁平化json数据用递归的方式改写成组织树的形式

  let arr5 =  [
    {
      "id": "1",
      "name": "中国",
      "code": "110",
      "parent": ""
    },
    {
      "id": "2",
      "name": "北京市",
      "code": "110000",
      "parent": "110"
    },
    {
      "id": "3",
      "name": "河北省",
      "code": "130000",
      "parent": "110"
    },
    {
      "id": "4",
      "name": "四川省",
      "code": "510000",
      "parent": "110"
    },
    {
      "id": "5",
      "name": "石家庄市",
      "code": "130001",
      "parent": "130000"
    },
    {
      "id": "6",
      "name": "唐山市",
      "code": "130002",
      "parent": "130000"
    },
    {
      "id": "7",
      "name": "邢台市",
      "code": "130003",
      "parent": "130000"
    },
    {
      "id": "8",
      "name": "成都市",
      "code": "510001",
      "parent": "510000"
    },
    {
      "id": "9",
      "name": "简阳市",
      "code": "510002",
      "parent": "510000"
    },
    {
      "id": "10",
      "name": "武侯区",
      "code": "51000101",
      "parent": "510001"
    },
    {
      "id": "11",
      "name": "金牛区",
      "code": "51000102",
      "parent": "510001"
    }
  ];
  function Tree(arr5){
    let ind = 0 ; //判断第一层是不是还有子树
    if(s.length>1){
        for(let i=0;i<s.length;i++){
            let a = 0;  //计数信号量
            for(let j=i+1;j<s.length;j++){
                if(s[j].parent == s[i].code){//判断是否有子树
                    a++;  //子树计数
                    ind++;
                }
            }
            if(a == 0&&s[i].parent!=''){ //没有子树，即树的最底层
                for(let n in s){
                //定义children，避免undefined
                    s[n].children = s[n].children?s[n].children:[];
                    if(s[n].code == s[i].parent){
                        s[n].children.push(s[i]);
                    }
                }
                s.splice(i,1);//删除，该子树已经加入了某项底层
                i--; //删掉子树后后面的数据会填补空缺，退一步才能遍历完全
            }
        }
        if(ind != 0){ //如果还有子树继续遍历第一层
            Tree(s);
        }
    }
    return s;
}
function handleTree(s){ 
    s = Tree(s);
    console.log(s);
    return s;
}

    

 
