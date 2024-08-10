"use client";

import React, { useEffect, useState } from "react";
import useStore from "./zastand";

// import 'react-medium-image-zoom/dist/styles.css';

// p-4 bg-white shadow-md rounded-lg
const RegistrationForm = () => {
  const { res } = useStore();
  const [formData, setFormData] = useState({
    courseName: "",
    courseFee: "",
    timing: "",
    name1: "",
    fatherName1: "",
    motherName1: "",
    gender: "",
    day: "",
    month: "",
    year: "",
    category: "",
    occupation: "",
    occupationDetails: "",
    organization: "",
    designation: "",
    school: "",
    otherDetails: "",
    phone: "",
    mobile: "",
    email: "",
    address: "",
    village: "",
    block: "",
    subdivision: "",
    district: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    // Only populate the form when 'res' is available
    if (res) {
      setFormData({
        courseName: res["Course Interested in"] || "",
        courseFee: res["Course Fee"] || "",
        timing: res["Timing"] || "",
        name1: res["Name1"] || "",
        fatherName1: res["FatherName1"] || "",
        motherName1: res["MotherName1"] || "",
        gender: res['male'] === 'selected' ? 'Male' : res['female'] === 'selected' ? 'Female' : "",
        day: res["day"] || "",
        month: res["month"] || "",
        year: res["year"] || "",
        category: res['SC'] === 'selected' ? 'SC' :
        res['ST'] === 'selected' ? 'ST' :
        res['OBC'] === 'selected' ? 'OBC' :
        res['P/H'] === 'selected' ? 'P/H' :
        res['General'] === 'selected' ? 'General' : '',
        occupation: res['Employed'] === 'selected' ? 'Employed' :
                            res['Unemployed'] === 'selected' ? 'Unemployed' :
                            res['Student'] === 'selected' ? 'Student' :
                            res['Others'] === 'selected' ? 'Others' :
                            '',
        occupationDetails: res["occupationDetails"] || "",
        organization: res["organization"] || "",
        designation: res["designation"] || "",
        school: res["school"] || "",
        otherDetails: res["otherDetails"] || "",
        phone: res["phone"] || "",
        mobile: res["mobile"] || "",
        email: res["email"] || "",
        address: res["Address"] || "",
        village: res["Village"] || "",
        block: res["Block"] || "",
        subdivision: res["subdivision"] || "",
        district: res["district"] || "",
        state: res["state"] || "",
        pincode: res["pincode"] || "",
      });
    }
  }, [res]); // Dependency on 'res'

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // const submitFormData = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission behavior

  //   try {
  //     // Send form data to your backend
  //     const response = await axios.post("/api/submit", formData);
  //     console.log("Form submitted successfully:", response.data);
  //     // Handle success (e.g., show a success message, clear the form, etc.)
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     // Handle error (e.g., show an error message)
  //   }
  // };

  return (
    <div className="h-[650px] font-poppins m-5 mx-auto p-3 bg-white shadow-md rounded-3xl overflow-y-scroll">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Application for Short Term Course
      </h1>
      <form className="overflow-y-auto m-4">
        <div className="mb-4">
          <label className="block text-gray-700">Course Interested In:</label>
          <input
            id="courseName"
            type="text"
            name="courseName"
            // value={res ? res["Course Interested in"] : ""}
          //  value={res? res['Course Interested in']: ''
            // value={res && res["Course Interested in"] !== null && res["Course Interested in"] !== undefined ? res["Course Interested in"] : ""}
            value={formData.courseName}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 bg-green-100 border rounded-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Course Fee:</label>
            <input
            id="courseFee"
              type="text"
              name="courseFee"
              // value={res ? res["Course Fee"] : ""}
              // value={res && res["Course Fee"] !== null ? res["Course Fee"] : ""}
              // value={res && res["Course Fee"] !== null && res["Course Fee"] !== undefined ? res["Course Fee"] : ""}
              value={formData.courseFee}
              onChange={handleChange}
              className="w-full text-black bg-green-100 px-3 py-2 border rounded-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Timing:</label>
            <input
            id="timing"
              type="text"
              name="timing"
              // value={res ? res["Timing"] : ""}
              // value={res && res["Timing"] !== null && res["Timing"] !== undefined ? res["Timing"] : ""}
              // value={res['formData.timing']}
              value={formData.timing}
              onChange={handleChange}
              className="w-full px-3 py-2 text-black bg-green-100 border rounded-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
          id="name1"
            type="text"
            name="name1"
            // value={res ? res["Name1"] : ""}
            // value={res && res["Name1"] !== null ? res["Name1"] : ""}
            // value={res && res["Name1"] !== null && res["Name1"] !== undefined ? res["Name1"] : ""}
            value={formData.name1}
            onChange={handleChange}
            className="w-full bg-green-100 text-black px-3 py-2 border rounded-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Father&apos;s Name:</label>
          <input
          id="fatherName1"
            type="text"
            name="fatherName1"
            // value={res ? res["FatherName1"] : ""}
            // value={res && res["FatherName1"] !== null ? res["FatherName1"] : ""}
            // value={res && res["FatherName1"] !== null && res["FatherName1"] !== undefined ? res["FatherName1"] : ""}
            value={formData.fatherName1}
            onChange={handleChange}
            className="w-full px-3 text-black bg-green-100 py-2 border rounded-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mother &apos;s Name:</label>
          <input
          id="motherName1"
            type="text"
            name="motherName1"
            // value={res ? res["MotherName1"] : ""}
            // value={res && res["MotherName1"] !== null ? res["MotherName1"] : ""}
            // value={res && res["MotherName1"] !== null && res["MotherName1"] !== undefined ? res["MotherName1"] : ""}
            value={formData.motherName1}  // Bind the selected value to formData.gender
            onChange={handleChange}
            className="w-full px-3 text-black bg-green-100 py-2 border rounded-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <select
          id="gender"
          
          name="gender"
          value={formData.gender}  // Bind the selected value to formData.gender
          onChange={handleChange}
            className="w-full bg-green-100 text-black px-3 py-2 border rounded-full"
          >
            {/* <option value="">Select Gender</option> */}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Day:</label>
            <input
              type="text"
              name="day"
              // value={res ? res["day"] : ""}
              // value={res && res["day"] !== null ? res["day"] : ""}
              value={formData.day}
              onChange={handleChange}
              className="w-full text-black px-3 bg-green-100 py-2 border rounded-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Month:</label>
            <input
            id="month"
              type="text"
              name="month"
              // value={res ? res["month"] : ""}
              // value={res && res["month"] !== null ? res["month"] : ""}
              // value={res && res["month"] !== null && res["month"] !== undefined ? res["month"] : ""}
              value={formData.month}
              onChange={handleChange}
              className="w-full px-3 text-black bg-green-100 py-2 border rounded-full"
            />
          </div>

          <div>
            <label className="block text-gray-700">Year:</label>
            <input
            id="year"
              type="text"
              name="year"
              // value={res ? res["year"] : ""}
              // value={res && res["year"] !== null ? res["year"] : ""}
              // value={res && res["year"] !== null && res["year"] !== undefined ? res["year"] : ""}
              value={formData.year}
              onChange={handleChange}
              className="w-full px-3 text-black bg-green-100 py-2 border rounded-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}  // Bind the selected value to formData.gender
            onChange={handleChange}
            className="w-full text-black px-3 py-2 bg-green-100 border rounded-full"
          >
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="obc">OBC</option>
            <option value="general">GENERAL</option>
            <option value="ph">PH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Occupation:</label>
          <select
           name="occupation"
           value={formData.occupation}  // Bind the selected value to formData.gender
           onChange={handleChange}
            className="w-full text-black bg-green-100 px-3 py-2 border rounded-full"
          >
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="student">Student</option>
            <option value="others">Others</option>
          </select>
          <input
            type="text"
            name="occupationDetails"
            placeholder="If others, give details"
            className="w-full px-3 text-black bg-green-100 py-2 border rounded-full mt-2"
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700">Occupation:</label>
          <select
            name="occupation"
            className="w-full px-3 py-2 border rounded mb-2"
          >
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="student">Student</option>
            <option value="others">Others</option>
          </select>
        </div> */}

        {/* Section for "If Employed" */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            (a) If Employed:
          </label>
          <div className="ml-6">
            <label className="block text-gray-700">
              Name of Organization/Department:
            </label>
            <input
            id="organization"
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-3 text-black bg-green-100 py-2 border rounded-full mb-2"
            />
            <label className="block text-gray-700">
              Designation & Pay Scale:
            </label>
            <input
            id="designation"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full text-black px-3 bg-green-100 py-2 border rounded-full"
            />
          </div>
        </div>

        {/* Section for "If Student" */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            (b) If Student:
          </label>
          <div className="ml-6">
            <label className="block text-gray-700">
              Name of School/College/University:
            </label>
            <input
            id="school"
              type="text"
              name="school"
              // value={res ? res["school"] : ""}
              // value={res && res["school"] !== null ? res["school"] : ""}
              // value={res && res["school"] !== null && res["school"] !== undefined ? res["school"] : ""}
              value={formData.school}
              onChange={handleChange}
              className="w-full text-black px-3 bg-green-100 py-2 border rounded-full"
            />
          </div>
        </div>

        {/* Section for "If Others" */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            (c) If Others, give details:
          </label>
          <div className="ml-6">
            <input
            id="otherDetails"
              type="text"
              name="otherDetails"
              // value={res ? res["others"] : ""}
              // value={res && res["others"] !== null ? res["others"] : ""}
              // value={res && res["others"] !== null && res["others"] !== undefined ? res["others"] : ""}
              value={formData.otherDetails}
              onChange={handleChange}
              className="w-full px-3 text-black bg-green-100 py-2 border rounded-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone:</label>
          <input
          id="phone"
            type="text"
            name="phone"
            // value={res ? res["phone"] : ""}
            // value={res && res["phone"] !== null ? res["phone"] : ""}
            // value={res && res["phone"] !== null && res["phone"] !== undefined ? res["phone"] : ""}
            value={formData.phone}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile:</label>
          <input
          id="mobile"
            type="text"
            name="mobile"
            // value={res ? res["mobile"] : ""}
            // value={res && res["mobile"] !== null ? res["mobile"] : ""}
            // value={res && res["mobile"] !== null && res["mobile"] !== undefined ? res["mobile"] : ""}
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
          id="email"
            type="email"
            name="email"
            // value={res ? res["email"] : ""}
            // value={res && res["email"] !== null ? res["email"] : ""}
            // value={res && res["email"] !== null && res["email"] !== undefined ? res["email"] : ""}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Address for Correspondence:
          </label>
          <input
          id="address"
            type="address"
            name="address"
            // value={res ? res["Address"] : ""}
            // value={res && res["Address"] !== null ? res["Address"] : ""}
            // value={res && res["Address"] !== null && res["Address"] !== undefined ? res["Address"] : ""}
            value={formData.address}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="block text-gray-700">
            Name of Village/Gram Panchayat/Ward:
          </label>
          <input
          id="village"
            type="name"
            name="village"
            // value={res ? res["Village"] : ""}
            // value={res && res["Village"] !== null ? res["Village"] : ""}
            // value={res && res["Village"] !== null && res["Village"] !== undefined ? res["Village"] : ""}
            value={formData.village}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="block text-gray-700">Block:</label>
          <input
          id="block"
            type="block"
            name="block"
            // value={res ? res["Block"] : ""}
            // value={res && res["Block"] !== null && res["Block"] !== undefined ? res["Block"] : ""}
            value={formData.block}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="block text-gray-700">Sub-Division:</label>
          <input
          id="subdivision"
            type="sub-division"
            name="subdivision"
            // value={res ? res["subdivision"] : ""}
            // value={res && res["subdivision"] !== null ? res["subdivision"] : ""}
            // value={res && res["subdivision"] !== null && res["subdivision"] !== undefined ? res["subdivision"] : ""}
            value={formData.subdivision}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="block text-gray-700">District:</label>
          <input
          id="district"
            type="District"
            name="district"
            // value={res && res["district"] !== null ? res["district"] : ""}
            // value={res && res["district"] !== null && res["district"] !== undefined ? res["district"] : ""}
            value={formData.district}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 bg-green-100 border rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="block text-gray-700">State:</label>
          <input
          id="state"
            type="State"
            name="state"
            // value={res && res["state"] !== null ? res["state"] : ""}
            // value={res && res["state"] !== null && res["state"] !== undefined ? res["state"] : ""}
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3 text-black bg-green-100 py-2 border rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="block text-gray-700">Pin Code:</label>
          <input
          id="pincode"
            type="pin"

            name="pincode"
            // value={res && res["pincode"] !== null ? res["pincode"] : ""}
            //  value={res && res["pincode"] !== null && res["pincode"] !== undefined ? res["pincode"] : ""}
            value={formData.pincode}
            onChange={handleChange}
            className="w-full px-3 text-black py-2 bg-green-100 border rounded-full"
          />
        </div>
        <button
          type="submit"
          className=" px-8 py-2 bg-blue-500 text-white rounded-lg"
        // onSubmit={submitFormData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
