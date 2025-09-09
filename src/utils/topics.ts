export interface Topic {
    name: string;
    enabled: boolean;
    subtopics?: Topic[];
}

export const topics: Topic[] = [
    {
        name: "Technology",
        enabled: true,
        subtopics: [
            {
                name: "Software Development",
                enabled: true,
                subtopics: [
                    {
                        name: "Web Development",
                        enabled: true,
                        subtopics: [
                            {
                                name: "Frontend",
                                enabled: true,
                                subtopics: [
                                    { name: "React", enabled: true },
                                    { name: "Angular", enabled: false },
                                ],
                            },
                            {
                                name: "Backend",
                                enabled: true,
                                subtopics: [
                                    { name: "Node.js", enabled: true },
                                    { name: "Django", enabled: true },
                                ],
                            },
                        ],
                    },
                    { name: "Mobile Development", enabled: false },
                    { name: "Game Development", enabled: true },
                ],
            },
            {
                name: "Hardware",
                enabled: true,
                subtopics: [
                    { name: "CPUs", enabled: true },
                    { name: "GPUs", enabled: true },
                    { name: "Storage", enabled: false },
                ],
            },
            {
                name: "Artificial Intelligence",
                enabled: false,
                subtopics: [
                    {
                        name: "Machine Learning",
                        enabled: true,
                        subtopics: [
                            {
                                name: "Deep Learning",
                                enabled: true,
                                subtopics: [
                                    { name: "Neural Networks", enabled: true },
                                ],
                            },
                        ],
                    },
                    { name: "Natural Language Processing", enabled: false },
                    { name: "Computer Vision", enabled: true },
                ],
            },
        ],
    },
    {
        name: "Science",
        enabled: true,
        subtopics: [
            {
                name: "Physics",
                enabled: true,
                subtopics: [
                    { name: "Quantum Mechanics", enabled: true },
                    { name: "Astrophysics", enabled: true },
                ],
            },
            {
                name: "Biology",
                enabled: false,
                subtopics: [
                    { name: "Genetics", enabled: false },
                    { name: "Ecology", enabled: true },
                ],
            },
            {
                name: "Chemistry",
                enabled: true,
                subtopics: [
                    { name: "Organic Chemistry", enabled: true },
                    { name: "Inorganic Chemistry", enabled: false },
                ],
            },
        ],
    },
    {
        name: "Arts & Culture",
        enabled: true,
        subtopics: [
            {
                name: "Music",
                enabled: true,
                subtopics: [
                    { name: "Classical", enabled: true },
                    { name: "Rock", enabled: true },
                    { name: "Jazz", enabled: false },
                ],
            },
            {
                name: "Film",
                enabled: true,
                subtopics: [
                    { name: "Action", enabled: true },
                    { name: "Comedy", enabled: true },
                    { name: "Drama", enabled: true },
                ],
            },
        ],
    },
    {
        name: "Health & Wellness",
        enabled: false,
        subtopics: [
            {
                name: "Fitness",
                enabled: true,
                subtopics: [
                    { name: "Cardio", enabled: true },
                    { name: "Strength Training", enabled: false },
                ],
            },
            {
                name: "Nutrition",
                enabled: true,
                subtopics: [
                    { name: "Vitamins", enabled: true },
                    { name: "Diets", enabled: true },
                ],
            },
        ],
    },
    {
        name: "Business & Finance",
        enabled: true,
        subtopics: [
            {
                name: "Investing",
                enabled: true,
                subtopics: [
                    { name: "Stocks", enabled: true },
                    { name: "Bonds", enabled: false },
                    { name: "Real Estate", enabled: true },
                ],
            },
            {
                name: "Marketing",
                enabled: false,
                subtopics: [
                    { name: "Digital Marketing", enabled: true },
                    { name: "Content Marketing", enabled: false },
                ],
            },
        ],
    },
    {
        name: "Sports",
        enabled: true,
        subtopics: [
            {
                name: "Team Sports",
                enabled: true,
                subtopics: [
                    { name: "Soccer", enabled: true },
                    { name: "Basketball", enabled: true },
                ],
            },
            {
                name: "Individual Sports",
                enabled: true,
                subtopics: [
                    { name: "Tennis", enabled: false },
                    { name: "Swimming", enabled: true },
                ],
            },
        ],
    },
    {
        name: "Travel",
        enabled: false,
        subtopics: [
            {
                name: "Destinations",
                enabled: true,
                subtopics: [
                    { name: "Europe", enabled: true },
                    { name: "Asia", enabled: true },
                    { name: "South America", enabled: false },
                ],
            },
            {
                name: "Travel Tips",
                enabled: false,
                subtopics: [
                    { name: "Budgeting", enabled: true },
                    { name: "Packing", enabled: false },
                ],
            },
        ],
    },
    {
        name: "Food & Drink",
        enabled: true,
        subtopics: [
            {
                name: "Cuisines",
                enabled: true,
                subtopics: [
                    { name: "Italian", enabled: true },
                    { name: "Mexican", enabled: true },
                    { name: "Japanese", enabled: true },
                ],
            },
            {
                name: "Beverages",
                enabled: true,
                subtopics: [
                    { name: "Coffee", enabled: true },
                    { name: "Tea", enabled: false },
                    { name: "Wine", enabled: true },
                ],
            },
        ],
    },
    {
        name: "History",
        enabled: true,
        subtopics: [
            {
                name: "Ancient History",
                enabled: true,
                subtopics: [
                    { name: "Ancient Rome", enabled: true },
                    { name: "Ancient Greece", enabled: false },
                ],
            },
            {
                name: "Modern History",
                enabled: true,
                subtopics: [
                    { name: "World War I", enabled: true },
                    { name: "World War II", enabled: true },
                ],
            },
        ],
    },
    {
        name: "Education",
        enabled: false,
        subtopics: [
            {
                name: "Higher Education",
                enabled: true,
                subtopics: [
                    { name: "University", enabled: true },
                    { name: "College", enabled: true },
                ],
            },
            {
                name: "Online Learning",
                enabled: true,
                subtopics: [
                    { name: "MOOCs", enabled: false },
                    { name: "Tutorials", enabled: true },
                ],
            },
        ],
    },
];