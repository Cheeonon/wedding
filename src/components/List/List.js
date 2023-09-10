import "List.scss";
import users from "../../data/users.json";

const List = () => {
    console.log(users)

    return (
        <div>
            {/* {Users.students.map((item, i) => (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                </tr>
            ))} */}
        </div>
    )
}

export default List