import Book from "./Book"

import image from './Self.jpg'
import image1 from './test.PNG'


let Book1={
    image:image,
    title:'A New Begining',
    description:'loreeeemmm ipseeeeeemmmm jajajjjaaja'
}
let Book2={
    image:image1,
    title:'Lahore Da Pava',
    description:'Akhtar Lava'
}


const Booklist=()=>{
    return <>
    <Book img={Book1.image} title={Book1.title} desc={Book1.description}/>
    <Book img={Book2.image} title={Book2.title} desc={Book2.description} />
    <Book img={Book1.image} title={Book2.title} desc={Book2.description} />
    <Book/>
    </>
}
export default Booklist