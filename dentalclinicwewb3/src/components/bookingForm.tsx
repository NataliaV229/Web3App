import { Dispatch, SetStateAction, useState } from "react";

interface ServiceProps {
  setName: Dispatch<SetStateAction<any>>,
  setEmail: Dispatch<SetStateAction<any>>,
  setDate: Dispatch<SetStateAction<any>>,
  name: any
  email: any
  date: any
}

const BookingForm: React.FC<ServiceProps> = ({ setName, setEmail, setDate, name, email, date }) =>  {

  const handleInputNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleInputEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputDateChange = (e: any) => {
    setDate(e.target.value);
  };

  return (
    <div className="text-black w-full mb-4">
      <p className="text-center mb-4 text-lg">Complite the form to book the procedure!</p>
      <input
        className="w-full mb-2 p-2 bg-slate-200 rounded-md outline-none"
        type="text"
        id="nameid"
        name="name"
        value={name}
        onChange={handleInputNameChange}
        placeholder="Full Name"
        required
      />
      <input
        className="w-full mb-2 p-2 bg-slate-200 rounded-md outline-none"
        type="email"
        id="emailid"
        name="email"
        value={email}
        onChange={handleInputEmailChange}
        placeholder="Email"
        required
      />
      <input
        className="w-full p-2 bg-slate-200 rounded-md outline-none"
        type="datetime-local"
        id="bookingTime"
        name="bookingTime"
        value={date}
        onChange={handleInputDateChange}
      />
    </div> 
  );
}


export default BookingForm