import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Signup3 = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    country: '',
    address: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/registration-complete", { state: { name: form.name } });
  };

  return (
    <div className="min-h-screen bg-white p-6 rounded-3xl">
      <button onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft />
      </button>
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Name*" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="input" required />
        <input placeholder="Phone no.*" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className="input" required />
        <input placeholder="Email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="input" />

        <div className="flex gap-2">
          <input type="date" value={form.dob} onChange={(e) => handleChange('dob', e.target.value)} className="input flex-1" />
          <select value={form.gender} onChange={(e) => handleChange('gender', e.target.value)} className="input flex-1">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <select value={form.country} onChange={(e) => handleChange('country', e.target.value)} className="input">
          <option value="">Select Country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Greece">Greece</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Ireland">Ireland</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
          <option value="Kenya">Kenya</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Philippines">Philippines</option>
          <option value="Russia">Russia</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Singapore">Singapore</option>
          <option value="South Africa">South Africa</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Thailand">Thailand</option>
          <option value="Turkey">Turkey</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>

        <textarea placeholder="Address" value={form.address} onChange={(e) => handleChange('address', e.target.value)} className="input" />

        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-full w-full hover:bg-blue-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup3;
