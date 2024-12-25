import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Demo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    storeName: "",
    marketplace: "",
    asinLink: "",
    salesVolume: "",
    skus: "",
    budget: "",
    agency: false,
    agencyServices: "",
    painPoints: [],
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To show loading state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "painPoints") {
      setFormData((prev) => ({
        ...prev,
        painPoints: checked
          ? [...prev.painPoints, value]
          : prev.painPoints.filter((item) => item !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email || !formData.role) {
      toast.error('Please fill out all required fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    console.log("formData.fullName", formData.fullName); 
    try {
      const templateParams = {
        from_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        role: formData.role,
        storeName: formData.storeName,
        marketplace: formData.marketplace,
        asinLink: formData.asinLink,
        salesVolume: formData.salesVolume,
        skus: formData.skus,
        budget: formData.budget,
        agency: formData.agency ? "Yes" : "No",
        agencyServices: formData.agencyServices,
        painPoints: formData.painPoints.join(", "), 
        comments: formData.comments,
      };

      // Debugging log
      console.log("Sending email with these params:", templateParams);

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      console.log("EmailJS response:", response);

      if (response.status === 200) {
        setIsSubmitting(false);
        toast.success('Form submitted successfully!');
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          role: "",
          storeName: "",
          marketplace: "",
          asinLink: "",
          salesVolume: "",
          skus: "",
          budget: "",
          agency: false,
          agencyServices: "",
          painPoints: [],
          comments: "",
        });
      } else {
        throw new Error('Failed to send email.');
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Error submitting the form.');
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Request a Demo
      </h2>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (optional)</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              id="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
            >
              <option value="">Select Role</option>
              <option value="Owner">Owner</option>
              <option value="Marketing Manager">Marketing Manager</option>
              <option value="E-commerce Manager">E-commerce Manager</option>
              <option value="Amazon Manager">Amazon Manager</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Amazon Store Details */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">Amazon Store Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Amazon Brand/Store Name</label>
              <input
                type="text"
                name="storeName"
                id="storeName"
                placeholder="Amazon Brand/Store Name"
                value={formData.storeName}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="marketplace" className="block text-sm font-medium text-gray-700">Marketplace</label>
              <select
                name="marketplace"
                id="marketplace"
                value={formData.marketplace}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
              >
                <option value="">Select Marketplace</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="UAE">UAE</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="asinLink" className="block text-sm font-medium text-gray-700">Link ASIN</label>
            <input
              type="text"
              name="asinLink"
              id="asinLink"
              placeholder="Link ASIN"
              value={formData.asinLink}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full"
            />
          </div>
        </div>

        {/* Pain Points */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">Pain Points</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Low product visibility",
              "Decreasing sales",
              "High ACoS",
              "Inventory management",
              "Price competition",
              "Agency performance",
              "Other",
            ].map((point) => (
              <label key={point} className="flex items-center">
                <input
                  type="checkbox"
                  name="painPoints"
                  value={point}
                  checked={formData.painPoints.includes(point)}
                  onChange={handleChange}
                  className="mr-2"
                />
                {point}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
          <textarea
            name="comments"
            id="comments"
            placeholder="Additional Comments"
            value={formData.comments}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-md w-full h-32"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary text-white font-bold py-3 px-6 rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"} transition`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Demo;
