
// import image1 from './Self.jpg'

// let title1='Mern Stack Journey'
// let description1='Something Went Wrong'


const Book=(props)=>{
    let {img,title,desc}=props
    return <>
    <div>
        <img src={img}/>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
    </>
}
export default Book