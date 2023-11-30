import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateReviews = () => {
const singleReview = useLoaderData()
console.log(singleReview);

    const handleUpdateJob = event => {
        event.preventDefault();
        const form = event.target;           
        const comment = form.description.value;         
        const updatedJobs = {   comment  }
        console.log(updatedJobs);

        // send data to the server
        fetch(`https://hostizen-server-side.vercel.app/updateComments/${singleReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay!'
                    })
                }
            })

    }

    return (
        <div className="bg-[#cebfbf] p-5 md:p-28">
             
        <h2 className="mt-20 md:mt-0 text-center bg-gradient-to-l from-[#362929] to-[#5a3535] mb-10  bg-clip-text text-transparent   text-4xl font-bold">Update</h2>
        <form onSubmit={handleUpdateJob}>
            {/* form name and quantity row */}
        
            <div className="relative h-11 w-full">

                <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5a3535] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 shadow-2xl"
                    required name="description" defaultValue={singleReview?.comment}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-medium leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#5a3535] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#5a3535] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#5a3535] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
                    comment
                </label>
            </div>


            <input type="submit" value="Submit" className=" shadow-2xl form-control block w-full select-none mt-9 py-3 px-6 text-center align-middle font-sans text-xs font-bold    shadow-[#5a3535] transition-all hover:shadow-lg hover:shadow-[#5a3535] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn btn-primary bg-gradient-to-l from-[#362929] to-[#5a3535] hover:from-[#ff6d2a] hover:to-[#e64146] border-none rounded-lg text-white   normal-case " />

        </form>
    </div>
    );

};

export default UpdateReviews;