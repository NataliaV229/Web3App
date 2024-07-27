import { Dispatch, SetStateAction } from "react";

interface ServiceProps {
  setName: Dispatch<SetStateAction<any>>;
  setEmail: Dispatch<SetStateAction<any>>;
  setDate: Dispatch<SetStateAction<any>>;
  name: any;
  email: any;
  date: any;
  nftUrl: any;
  file: any;
  setFile: any;
  setPinataFile: any;
}

const BookingForm: React.FC<ServiceProps> = ({
  setName,
  setEmail,
  setDate,
  name,
  email,
  date,
  nftUrl,
  file,
  setFile,
  setPinataFile,
}) => {
  const handleInputNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleInputEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleInputDateChange = (e: any) => {
    setDate(e.target.value);
  };

  const handleInputFileChange = (e: any) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setPinataFile(e.target.files[0]);
  };

  return (
    <div className="text-black w-full mb-4">
      <p className="text-center mb-4 text-lg">
        Complite the form to book the procedure!
      </p>
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
      <p className="font-bold my-4">
        If you have any previous X-rays that you want to show to our surgeon,
        please upload here.
      </p>
      <div className="w-full">
        <img src={file} className="mb-4 w-full h-auto rounded-md" />
        <input
          type="file"
          onChange={handleInputFileChange}
          className="w-full file:mr-4 file:w-full file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-yellow-50 file:text-yellow-700
          hover:file:bg-yellow-100"
        />
      </div>
    </div>
  );
};

export default BookingForm;
