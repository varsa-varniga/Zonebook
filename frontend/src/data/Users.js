const users = [
    {
      name: "Eddie",
      location: "Austin",
      plan: "6-credit plan",
      image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image
      description: "Eddie usually books a mental reset & gym session once a week. During a busy month, he rolls his credits over.",
      activities: [
        { title: "Gym Time", count: 3, credits: 3, note: "1 credit each" },
        { title: "Meditation", credits: 3 }
      ]
    },
    {
      name: "Kate",
      location: "Amsterdam",
      plan: "25-credit plan",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual image
      description: "Kate recently found out she’s pregnant and uses ClassPass once or twice a week to stay active.",
      activities: [
        { title: "Prenatal Yoga", count: 2, credits: 8, note: "4 credits each" },
        { title: "Full Body Pilates", credits: 10 },
        { title: "Meditation", credits: 4 },
        { title: "Barre", credits: 3 }
      ]
    },
    {
      name: "Mel",
      location: "New York",
      plan: "80-credit plan",
      image: "https://randomuser.me/api/portraits/women/68.jpg", // Replace with actual image
      description: "Mel uses ClassPass to book her favorite workouts on repeat & keep up a fitness routine.",
      activities: [
        { title: "Strength Training", count: 2, credits: 16, note: "8 credits each" },
        { title: "Hot Yoga", count: 3, credits: 21, note: "7 credits each" },
        { title: "Cycling", count: 6, credits: 30, note: "5 credits each" },
        { title: "Cryotherapy", credits: 13 }
      ]
    }
  ];
export default users;