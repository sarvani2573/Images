
import Childimg from "./childimg"
const Parentimg =()=>{
    const users = [
        {
          name: 'Sam',
          age: 28,
          imageUrl: '/pic1.jpg', 
        },
        {
          name: 'Alex',
          age: 32,
          imageUrl: '/pic2.jpg', 
        },
        {
          name: 'Jessica',
          age: 25,
          imageUrl: '/pic3.jpg', 
        },
      ];
    
    return(
        <div>
            <Childimg users={users}/>
        </div>
    )
}
export default Parentimg