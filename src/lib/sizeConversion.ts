export function convertToUSSize(size: any, country: string): string {
  const number = parseInt(size); // Extract digits

  const EU_TO_US: Record<number, string> = {
    32: "0", 34: "2", 36: "4", 38: "6",
    40: "8", 42: "10", 44: "12", 46: "14",
    48: "16", 50: "18", 52: "20", 54: "22",
    56: "24", 58: "26", 60: "28",
  };

  const IT_TO_US: Record<number, string> = {
    36: "0", 38: "2", 40: "4", 42: "6",
    44: "8", 46: "10", 48: "12", 50: "14",
    52: "16", 54: "18", 56: "20", 58: "22",
    60: "24", 62: "26", 64: "28",
  };

  const UK_TO_US: Record<number, string> = {
    4: "0", 6: "2", 8: "4", 10: "6",
    12: "8", 14: "10", 16: "12", 18: "14",
    20: "16", 22: "18", 24: "20", 26: "22",
    28: "24", 30: "26", 32: "28",
  };

  const c = country?.toUpperCase();

  if (c === "EU") return EU_TO_US[number] || "N/A";
  if (c === "IT") return IT_TO_US[number] || "N/A";
  if (c === "UK") return UK_TO_US[number] || "N/A";
  if (c === "US") return String(number);

  return "N/A";
}
