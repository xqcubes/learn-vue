
//向上广播找到对应的组件实例

export function broadcast (instance,name){
    let parentInstance = instance.$parent
    while(parentInstance){
        if(parentInstance.$options.name !== name){
            parentInstance = parentInstance.$parent
        }else{
            return parentInstance
        }

    }

} 

//向下找到对应组件实例
export function findChildren(){


}