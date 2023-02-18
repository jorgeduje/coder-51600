
import UsersPres from './UsersPres'

const UsersCont = () => {

    let nombre = "pepito"
    let apellido = "perez"

  return (
    <div>
        <UsersPres nombre={nombre} apellido={apellido} />
    </div>
  )
}

export default UsersCont