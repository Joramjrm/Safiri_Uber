const Signin = () => {
    return(
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
                <h1 className="text-4xl text-whitefont-bold text-center mb-6">Login</h1>
                <form action=""></form>
                <div className="relative my-4">
                    <input type="email" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform - translate-y-6 scale-75 top-3-z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                </div>
                <div className="relative my-4">
                    <input type="password" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"/>
                    <label htmlFor="" className="absolute text-sm text-white duration-300 transform - translate-y-6 scale-75 top-3-z-10 origin-[0] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Password</label>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Remember me</label>
                        <span>Forgot Password?</span>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Signin;