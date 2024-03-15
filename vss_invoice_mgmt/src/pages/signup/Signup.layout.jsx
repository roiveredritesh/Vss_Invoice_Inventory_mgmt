import "../../App.css";

function Signup() {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex mt-6 mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Invoice Management System
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Your Account
              </h1>
              <form className="mt-6" action="#">
                <div className="gap-4 sm:grid grid-cols-3">
                  <div>
                    <label
                      for="businessname"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessname"
                      id="businessname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Business Name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="businesscontactno"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Business Contact No.
                    </label>
                    <input
                      type="number"
                      name="businesscontactno"
                      id="businesscontactno"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Business Contact No."
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="businessregisteredaddress"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Business Registered Address
                    </label>
                    <textarea
                      type="text"
                      name="businessregisteredaddress"
                      id="businessregisteredaddress"
                      placeholder="Business Registered Address"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    ></textarea>
                  </div>
                  <div>
                    <label
                      for="state"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></select>
                  </div>

                  <div>
                    <label
                      for="state"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    ></select>
                  </div>

                  <div>
                    <label
                      for="pincode"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pincode
                    </label>
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Pincode"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      for="contactperson"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contact Person
                    </label>
                    <input
                      type="text"
                      name="contactperson"
                      id="contactperson"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Contact Person"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      for="gstno"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      GST No.
                    </label>
                    <input
                      type="text"
                      name="gstno"
                      id="gstno"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="GST No."
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      for="gstscheme"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      GST Scheme
                    </label>
                    <select
                      id="gstscheme"
                      name="gstscheme"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value={""}>Select</option>
                      <option>Non-Composition</option>
                      <option>Composition</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col flex-wrap gap-4 justify-center mt-4">
                  <div class="ml-3 text-sm">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    class="w-80 self-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
