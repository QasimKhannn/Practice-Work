import './User.css'

const User=(props)=>{
    let {image,name,number,email}=props
    return<>
    {/* <div className='col-md-6 col-lg-3 col-sm-6'> */}
    <div className='back'>
        <img src={image} alt="" />
        <ul>
        <li>{name}</li>
        <li>{number}</li>
        <li>{email}</li>
        </ul>
    </div>
    {/* </div> */}
    </>
}
export default User