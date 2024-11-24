{
  const student1: string[] = ["priya", "rocky", "tanzim", "robi"];
  const student2: string[] = ["rony", "sagor", "priyanka", "salma"];

  const student3: string[] = [...student1, ...student2];
  console.log(student3);

  const rana = {
    name: "Rana",
    age: 25,
  };

  const address = {
    addrss: "Dhanmondi 10",
    division: "Dhaka",
  };

  const profile = {
    ...rana,
    ...address,
  };

  console.log(profile);

  const user = {
    name: "Jane Smith",
    age: 28,
    email: "janesmith@example.com",
    isFreelancer: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
      street: "123 Main St",
      city: "Metropolis",
      country: "Wonderland",
    },
  };

  const {
    name,
    age,
    address: { street, city },
  } = user;

  type Add = (num: number) => number;
  const sum: Add = (num) => {
    return num;
  };
}
