function User({name,website}){
    return (
        <div className="border-2 m-5 flex flex-col justify-center items-center">
            <p>{name}</p>
            <p>{website}</p>
        </div>
    )

}
export default User