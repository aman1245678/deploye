import Country from "../models/Country";
import Currency from "../models/Currency";
import db from "../db";

export const initializeData = async () => {
  console.log("🔄 Checking and initializing default data...");

  const currencyRepo = db.getRepository(Currency);
  const countryRepo = db.getRepository(Country);

  /** ============================
   *  CURRENCIES SEEDER
   * ============================ */
  const existingCurrencies = await currencyRepo.find();
  if (existingCurrencies.length === 0) {
    console.log("💰 Seeding default currencies...");

    const defaultCurrencies = [
      { code: "EUR", name: "Euro", symbol: "€", isDefault: true },
      { code: "USD", name: "US Dollar", symbol: "$", isDefault: false },
      { code: "GBP", name: "British Pound", symbol: "£", isDefault: false },
      { code: "INR", name: "Indian Rupee", symbol: "₹", isDefault: false },
    ];

    await currencyRepo.save(defaultCurrencies);
    console.log("✅ Default currencies added.");
  }

  /** ============================
   *  COUNTRIES SEEDER
   * ============================ */
  const existingCountries = await countryRepo.find();
  if (existingCountries.length === 0) {
    console.log("🌍 Seeding default countries...");
    
    const defaultCountries = [
      {
        name: "India",
        code: "IN",
        currency_symbol: "₹",
        currency_name: "Indian Rupee",
        currency_short_name: "INR",
      },
      {
        name: "United States",
        code: "US",
        currency_symbol: "$",
        currency_name: "US Dollar",
        currency_short_name: "USD",
      },
      {
        name: "United Kingdom",
        code: "GB",
        currency_symbol: "£",
        currency_name: "British Pound",
        currency_short_name: "GBP",
      },
      {
        name: "Germany",
        code: "DE",
        currency_symbol: "€",
        currency_name: "Euro",
        currency_short_name: "EUR",
      },
    ];

    await countryRepo.save(defaultCountries);
    console.log("✅ Default countries added.");
  }

  console.log("🎉 Data initialization complete!");
};