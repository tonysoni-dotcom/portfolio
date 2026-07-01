export interface Project {
    id: number,
    name: string,
    description: string,
    featured: boolean,
    projectStories? : ProjectStory[],
}

export interface ProjectStory {
    situation: string,
    task: string,
    action: string,
    result: string,
    whatIdDoDifferently: string,
}

export const projects: Project[] = [
    {
        id: 1,
        name: "RegLens",
        description: "Internal product piloted with HSBC to help enterprises track regulations and report compliance data (e.g., CO₂ emissions) to regulatory bodies.",
        featured: true,
    },
    {
        id: 2,
        name: "Aura", 
        description: "Portfolio management application with integrated AI wealth-advisor assistant.",
        featured: false,
    },
    {
        id: 3,
        name: "MarTech", 
        description: "An AI-driven advertising platform that generates compliance-reviewed banner ads.",
        featured: true,
    },
    {
        id: 4,
        name: "Superserious",
        description: "A cross-platform mobile application with content sharing, AI assistance, and community features; submitted to the Apple App Store.",
        featured: true,
    },
]
