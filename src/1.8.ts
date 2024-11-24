{
  type student = {
    name: string;
    roll: number;
    address: {
      thana: string;
      district: string;
      division: string;
    };
    subject: string[];
    readonly country: "Bangladesh";
  };

  const student1: student = {
    name: "Prokash",
    roll: 122,
    address: {
      thana: "Khulna",
      district: "Khulna",
      division: "khulna",
    },
    subject: ["Bangla", "English", "Mathematics"],
    country: "Bangladesh",
  };
  console.log(student1);
}
