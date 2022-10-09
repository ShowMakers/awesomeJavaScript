let arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
  {id: 6, name: '部门5', pid: 2},
]


function formToTree(arr){
  return arr.filter(item => {
    item.children = arr.filter(data=>data.pid === item.id);
    return item.pid === 0;
  })
}
//通过log来查看返回值(相当于调用查看返回值)
// console.log(formToTree(arr))

//TreeToArr
let tree = [
  {
      id: 4,
      label: "供应商管理系统",
      children: [
        {
            id: 2000,
            label: "雅虎卑鄙",
            children:[]
        },
          {
              id: 2015,
              label: "供应商数据看板"
          },
          {
              id: 2008,
              label: "供应商库管理",
              children: [
                  {
                      id: 2009,
                      label: "企业预备供应商"
                  },
                  {
                      id: 2010,
                      label: "潜在供应商库"
                  },
                  {
                      id: 2011,
                      label: "供应商档案维护"
                  },
                  {
                      id: 2012,
                      label: "供应商准入"
                  },
                  {
                      id: 2013,
                      label: "供应商分类管理"
                  },
                  {
                      id: 2014,
                      label: "供应商奖惩"
                  }
              ]
          },
          {
              id: 2016,
              label: "供应商行为库管理",
              children: [
                  {
                      id: 2029,
                      label: "供应商履约管理"
                  },
                  {
                      id: 2018,
                      label: "供应商负面行为管理"
                  },
                  {
                      id: 2019,
                      label: "负面行为影响系数"
                  },
                  {
                      id: 2020,
                      label: "负面行为管理策略"
                  }
              ]
          },
          {
              id: 2054,
              label: "审批管理",
              children: [
                  {
                      id: 2053,
                      label: "审批模板"
                  },
                  {
                      id: 2055,
                      label: "审批流程"
                  }
              ]
          },
          {
              id: 2021,
              label: "打分评价管理",
              children: [
                  {
                      id: 2022,
                      label: "打分评价列表"
                  },
                  {
                      id: 2023,
                      label: "人工打分",
                      children: [
                          {
                              id: 2040,
                              label: "使用模板"
                          },
                          {
                              id: 2041,
                              label: "模板预览"
                          },
                          {
                              id: 2042,
                              label: "新增模板"
                          },
                          {
                              id: 2043,
                              label: "人工打分(不使用模板)"
                          },
                          {
                              id: 2048,
                              label: "删除模板"
                          }
                      ]
                  },
                  {
                      id: 2024,
                      label: "系统评分",
                      children: [
                          {
                              id: 2044,
                              label: "新增模板"
                          },
                          {
                              id: 2045,
                              label: "模板预览"
                          },
                          {
                              id: 2046,
                              label: "使用模板"
                          },
                          {
                              id: 2049,
                              label: "删除模板"
                          },
                          {
                              id: 2050,
                              label: "修改系统评分模板"
                          },
                          {
                              id: 2051,
                              label: "获取供应商打分列表"
                          }
                      ]
                  }
              ]
          },
          {
              id: 2025,
              label: "系统设置",
              children: [
                  {
                      id: 2026,
                      label: "角色权限管理",
                      children: [
                          {
                              id: 2031,
                              label: "角色权限管理列表"
                          },
                          {
                              id: 2032,
                              label: "新增角色"
                          },
                          {
                              id: 2033,
                              label: "修改角色"
                          },
                          {
                              id: 2034,
                              label: "删除角色"
                          }
                      ]
                  },
                  {
                      id: 2027,
                      label: "人员管理",
                      children: [
                          {
                              id: 2035,
                              label: "企业用户人员列表查询"
                          },
                          {
                              id: 2036,
                              label: "新增账号"
                          },
                          {
                              id: 2037,
                              label: "修改账号信息"
                          },
                          {
                              id: 2038,
                              label: "删除用户"
                          },
                          {
                              id: 2039,
                              label: "修改用户账号状态"
                          }
                      ]
                  }
              ]
          }
      ]
  }
] 

function treeFormat(tree = []) {
  let res = [];
  tree.forEach(item => {
    const { id, label } = item;
    res.push({id,label});
    if (item?.children?.length) {
      res = res.concat(treeFormat(item.children))
    }
  });
  return res;
}
// console.log(treeFormat(tree));

function flatArr (data){
  const result = [];
  const map = (data)=>{
    data.forEach(item=>{
      if(item.children&&item.children.length>0){
        map(item.children)
      }
      const { id, label } = item;
      result.push({ id, label })
    })
  }
  map(data);
  return result
}
console.log(flatArr(tree));