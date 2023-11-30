import DashboardSectionTitle from "../../../components/DashboardSectionTitle/DashboardSectionTitle";


const AdminProfile = () => {

    return (
        <>
        {/* ffdfsfdsf */}
            <DashboardSectionTitle heading={'Admin profile'}>

            </DashboardSectionTitle>
            <div className="relative block shadow-2xl drop-shadow-2xl overflow-hidden rounded-lg border border-gray-100 p-4 mx-4 md:mx-8 lg:mx-20 mt-3 sm:p-6 lg:p-8">
        <span
          className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              Name : 
            </h3>


          </div>

          <div className="sm:shrink-0">
            <img
              alt="User img"
              src=""
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            Email : 
          </p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            {/* <dt className="text-sm font-medium text-gray-600">{userData?.memberShip !== 'Bronze' ? 'Bronze' : ''}</dt> */}
            <dd className="text-2xl  ">Number of meals</dd>
          </div>


        </dl>
      </div>
        </>
    );
};

export default AdminProfile;