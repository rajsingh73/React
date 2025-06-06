function Comp(promps){
    return (
        <>
            <div className="max-w-xs p-6 ml-3 inline-block rounded-md shadow-md bg-black mt-4">
            <img
            src={promps.arr.image || "https://cdn.suwalls.com/wallpapers/animals/cute-kitten-37952-2880x1800.jpg"}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                {promps.arr.id || "Lorem"}
            </span>
            <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
            </div>
            <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
            </p>
        </div>
        </>
    )
}
export default Comp