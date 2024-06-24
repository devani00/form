import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import * as Yup from 'yup'


const Form = () => {

    const [mobileNo, setMobileNo] = useState()

    // const [errors, setErrors] = useState();

    const [inputArr, setInputArr] = useState([]);
    
    const [formData, setFormData] = useState({
        name: '',
        age:'',
        mobileNo:'',
        email: '',
        city: '',
    });
    
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    
    const [deleteIndex, setDeleteIndex] = useState(null);
    
    let {name, age, email, city} = formData;

    // const validationSchema = Yup.object({
    //     name: Yup.string().required("Name is required !"),
    //     age: Yup.number().typeError("Age must be a number").min(1,"Minimum").max(150,"Maximum").required("Age is required"),
    //     mobileNo: Yup.string().matches(/^\d{10}$/, "Mobile Number must be 10 digit only").required("Mobile Number required"),
    //     email: Yup.string().required("E-mail is required").email("Invalid email formate"),
    //     city: Yup.string().required("City is required")
    // })

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try{
    //         await validationSchema.validate(inputArr, {abortEarly: false});

    //         setInputArr([...inputArr,{name, age, mobileNo, email, city}]);
    //         console.log(inputArr);
    //         console.log(formData);
    //         setFormData({
    //             name: '',
    //             age:'',
    //             mobileNo:'',
    //             email: '',
    //             city: '',
    //         });
    //     }catch(error){
    //         const newError = {};

    //         error.inner.forEach((err) => {
    //             newError[err.path] = err.message;
    //         })

    //         setErrors(newError)
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputArr([...inputArr,{name, age, mobileNo, email, city}]);
        console.log(inputArr);
        console.log(formData);
        setFormData({
            name: '',
            age:'',
            mobileNo:'',
            email: '',
            city: '',
        });
        console.log(mobileNo)
    }

    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            age:'',
            mobileNo:'',
            email: '',
            city: '',
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleDelete = (index) => {
        setDeleteIndex(index);
        setShowConfirmDelete(true);
    };
    
    const handleConfirmDelete = () => {
        const newInputArr = [...inputArr];
        newInputArr.splice(deleteIndex, 1);
        setInputArr(newInputArr);
        setShowConfirmDelete(false);
    };
    
    const handleCancelDelete = () => {
        setShowConfirmDelete(false);
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4 h-screen">
            {/* <form>
                <div>
                    <label for="name">Name:</label>
                    <input 
                        type="text" 
                        name="name"
                        id='name'
                        value={formData.name}
                        placeholder="Enter Your Name"  
                        onChange={handleChange}  
                        required
                    />
                </div>

                <div>
                    <label for="age">Age:</label>
                    <input 
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        placeholder="Enter Your Age"
                        onChange={handleChange}
                        required     
                    />
                </div>

                <div>
                    <label for="mobileNo">Mobile No:</label>
                    <input 
                        type="text"
                        id="mobileNo"
                        name="mobileNo"
                        value={formData.mobileNo}
                        placeholder="Enter Your Mobile No."
                        onChange={handleChange} 
                        minLength={10}
                        maxLength={10}
                        required   
                    />
                </div>

                <div>
                    <label for="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter Your E-mail"
                        onChange={handleChange}     
                        required
                    />
                </div>

                <div>
                    <label for="city">City:</label>
                    <select id="city" name='city' value={formData.city} onChange={handleChange}>
                        <option value="" >Select a City</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Surat">Surat</option>
                        <option value="Vadodara">Vadodara</option>
                    </select>
                </div>
                
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </form> */}

            <h1 className='text-xl mb-5'>Form</h1>

            <div className="w-full md:w-96 bg-white rounded-lg shadow-md p-4">
                <form className="flex flex-col space-y-4 ">
                    <div className="flex items-center ">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mr-2">Name:</label>
                        <input type="text" id="name" name="name" className="rounded-md border border-gray-300 p-2 w-full" value={formData.name} placeholder="Enter Your Name" onChange={handleChange} required />
                        {/* {errors.name && <div className="text-red">{errors.name}</div>} */}
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="age" className="text-sm font-medium text-gray-700 mr-2">Age:</label>
                        <input type="number" id="age" name="age" className="rounded-md border border-gray-300 p-2 w-full" value={formData.age} placeholder="Enter Your Age" onChange={handleChange} required />
                        {/* {errors.age && <div className="text-red">{errors.age}</div>} */}
                    </div>

                    {/* <div className="flex items-center">
                        <label htmlFor="mobileNo" className="text-sm font-medium text-gray-700 mr-2">Mo.No:</label>
                        <input type="text" id="mobileNo" name="mobileNo" className="rounded-md border border-gray-300 p-2 w-full" value={formData.mobileNo} placeholder="Enter Your Mobile No." onChange={handleChange} minLength={10} maxLength={10} required />
                    </div> */}

                    <div className="flex items-center">
                        <label htmlFor="mobileNo" className="text-sm font-medium text-gray-700 mr-2">Mo.No:</label>
                        <PhoneInput
                            className='rounded-md border border-gray-300 p-2 w-full'
                            placeholder="Enter phone number"
                            value={mobileNo}
                            onChange={setMobileNo}
                            rules={{ required: true }}
                            limitMaxLength={10}
                        />
                        {/* {errors.mobileNo && <div className="text-red">{errors.mobileNo}</div>} */}
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 mr-2">Email:</label>
                        <input type="email" id="email" name="email" className="rounded-md border border-gray-300 p-2 w-full" value={formData.email} placeholder="Enter Your E-mail" onChange={handleChange} required />
                        {/* {errors.email && <div className="text-red">{errors.email}</div>} */}
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="city" className="text-sm font-medium text-gray-700 mr-2">City:</label>
                        <select id="city" name="city" value={formData.city} onChange={handleChange} className="rounded-md border border-gray-300 p-2 w-full">
                            <option value="">Select a City</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Bhavnagar">Bhavnagar</option>
                            <option value="Rajkot">Rajkot</option>
                            <option value="Surat">Surat</option>
                            <option value="Vadodara">Vadodara</option>
                        </select>
                        {/* {errors.city && <div className="text-red">{errors.city}</div>} */}
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button type="submit" className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800" onClick={handleSubmit}>Submit</button>
                        <button type="reset" className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>

            <div className="flex justify-center rounded-lg">
                <table className="w-full my-4 rounded-lg">
                    <tbody>
                    {inputArr.map((item, index) => (
                        <tr key={index} className="rounded-lg shadow-md bg-white mb-2">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.age}</td>
                            <td className="px-4 py-2">{item.mobileNo}</td>
                            <td className="px-4 py-2">{item.email}</td>
                            <td className="px-4 py-2">{item.city}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => handleDelete(index)} className="px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-700">
                                    <AiOutlineClose />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            
            
            <div className="relative">
                {showConfirmDelete && (
                    <div
                    className="fixed inset-0 bg-gray-500/50 flex items-center justify-center px-4 py-6"
                    >
                    <div className="bg-white rounded-lg shadow-md px-8 py-5">
                        <p className="text-sm text-gray-700">Are you sure? <br /> You want to delete it.</p>
                        <div className="flex justify-end space-x-2 mt-4">
                        <button
                            onClick={handleConfirmDelete}
                            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700"
                        >
                            Yes
                        </button>
                        <button
                            onClick={handleCancelDelete}
                            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form