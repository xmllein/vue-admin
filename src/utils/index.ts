interface ITree {
  id: string
  parentId: string
  children?: ITree[]
  [key: string]: any
}

export default {
  /**
   * 树形结构扁平化
   * @param {*} tree
   * @returns
   */
  spreadTree(tree: ITree) {
    let arr: ITree[] = []
    tree.forEach((item: any) => {
      arr.push(item)
      if (item.children && item.children.length) {
        arr = arr.concat(...this.spreadTree(item.children))
      }
    })
    return arr
  },
}
