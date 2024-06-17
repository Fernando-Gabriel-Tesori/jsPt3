// Define the list of companies
// Define the list of companies
const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kin Hyun Suk", foundedOn: 1938 },
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
    { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 }
  ];
  
  // Add 10% to the market value of each company
  const updatedCompanies = companies.map(company => {
    return {
      ...company,
      marketValue: company.marketValue * 1.1
    };
  });
  
  // Filter companies founded before 1990
  const oldCompanies = updatedCompanies.filter(company => company.foundedOn < 1990);
  
  // Sum the market values of the remaining companies
  const totalMarketValue = oldCompanies.reduce((acc, company) => acc + company.marketValue, 0);
  
  console.log("Updated Companies:", updatedCompanies);
  console.log("Old Companies:", oldCompanies);
  console.log("Total Market Value of Old Companies:", totalMarketValue);
  