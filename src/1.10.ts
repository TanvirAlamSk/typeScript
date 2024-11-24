{
  type developer = "frontdeveloper" | "backend developer";

  const newDevwloper: developer = "frontdeveloper";

  type FrontDeveloper = {
    language: String;
    library: String;
    salary: Number;
  };

  type BackendDeveloper = {
    language: string;
    dataBase: String;
    server: String;
  };

  type FullStackDeveloper = FrontDeveloper & BackendDeveloper;

  const neweDeveloper: FullStackDeveloper = {
    language: "JavaScript",
    library: "React",
    salary: 50000,
    dataBase: "MySql",
    server: "Ngiex",
  };

  console.log(newDevwloper);
}
