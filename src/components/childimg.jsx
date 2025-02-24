
const Childimg =(props)=>{
    return(
        <div className="cards">
            <h1>Profiles</h1>
            {props.users.map((profile,index)=>(
                <div key={index} className="one">
                  <h3>Name:{profile.name}</h3>
                  <h3>Age:{profile.age}</h3>
                  <img src={profile.imageUrl} alt="img"/>
                </div>

            ))}
        </div>
    )
}
export default Childimg