export function colorToBg(c: string) {
    switch (c) {
      case "red": return "bg-red-500";
      case "orange": return "bg-orange-400";
      case "yellow": return "bg-yellow-400";
      case "green": return "bg-green-500";
      case "blue": return "bg-blue-500";
      case "indigo": return "bg-indigo-500";
      case "purple": return "bg-purple-500";
      case "pink": return "bg-pink-500";
      case "brown": return "bg-amber-700";
      default: return "bg-gray-500";
    }
  }