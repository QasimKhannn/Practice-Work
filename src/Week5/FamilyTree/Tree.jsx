import React from 'react'
import Props from './Props'
import Members from './data'

const Tree = () => {
  return (
    <>
    {Members.map((mem)=>{
        return <Props type={mem.type} image={mem.family.first.image} name={mem.family.first.name} age={mem.family.first.age} city={mem.family.first.city} relation={mem.family.first.relation}
     image1={mem.family.second.image} name1={mem.family.second.name} age1={mem.family.second.age} city1={mem.family.second.city} relation1={mem.family.second.relation} />
    
    })}
    </>
  )
}

export default Tree