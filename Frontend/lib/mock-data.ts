import type { Company, Subject, Question } from "./store"

export const companies: Company[] = [
  { id: "accenture", name: "Accenture", logo: "🔷", difficulty: "Easy", totalSubjects: 7 },
  { id: "wipro", name: "Wipro", logo: "🟦", difficulty: "Easy", totalSubjects: 7 },
  { id: "tcs", name: "TCS", logo: "🔵", difficulty: "Easy", totalSubjects: 7 },
  { id: "infosys", name: "Infosys", logo: "🟪", difficulty: "Medium", totalSubjects: 7 },
  { id: "cognizant", name: "Cognizant", logo: "🔶", difficulty: "Medium", totalSubjects: 7 },
  { id: "amazon", name: "Amazon", logo: "🟠", difficulty: "Hard", totalSubjects: 7 },
  { id: "google", name: "Google", logo: "🔴", difficulty: "Hard", totalSubjects: 7 },
]

export const subjects: Subject[] = [
  { id: "sql", name: "SQL", totalQuestions: 50, icon: "🗄️" },
  { id: "dsa", name: "DSA", totalQuestions: 150, icon: "🧩" },
  { id: "oops", name: "OOPS", totalQuestions: 40, icon: "📦" },
  { id: "os", name: "Operating Systems", totalQuestions: 45, icon: "💻" },
  { id: "dbms", name: "DBMS", totalQuestions: 55, icon: "🗃️" },
  { id: "networking", name: "Networking", totalQuestions: 40, icon: "🌐" },
  { id: "aptitude", name: "Aptitude", totalQuestions: 100, icon: "🧮" },
]

export const generateQuestions = (subjectId: string, companyId?: string): Question[] => {
  const subjectNames: Record<string, string> = {
    sql: "SQL",
    dsa: "Data Structures & Algorithms",
    oops: "Object-Oriented Programming",
    os: "Operating Systems",
    dbms: "Database Management",
    networking: "Computer Networks",
    aptitude: "Quantitative Aptitude",
  }

  const difficulties: Array<"Easy" | "Medium" | "Hard"> = ["Easy", "Easy", "Medium", "Medium", "Hard"]
  const tags = ["Important", "Frequently Asked", "Core Concept", "Advanced", "Basics"]

  const questions: Question[] = []
  const count = subjectId === "dsa" ? 150 : subjectId === "aptitude" ? 100 : 50

  for (let i = 1; i <= count; i++) {
    questions.push({
      id: `${subjectId}-${companyId || "general"}-${i}`,
      title: `${subjectNames[subjectId]} Question ${i}`,
      content: `This is a detailed ${difficulties[i % 5]} level question about ${subjectNames[subjectId]}. It tests your understanding of key concepts and problem-solving abilities. You'll need to analyze the problem carefully and provide a well-structured solution that demonstrates both theoretical knowledge and practical application.`,
      difficulty: difficulties[i % 5],
      tags: [tags[i % 5], subjectId === "dsa" ? "LeetCode" : "Interview"],
      companyId,
      subjectId,
      answer: `Solution approach:\n1. Analyze the problem requirements\n2. Identify the key concepts involved\n3. Design an efficient solution\n4. Implement with proper error handling\n5. Test with edge cases\n\nTime Complexity: O(n)\nSpace Complexity: O(1)`,
    })
  }

  return questions
}

export const alumniData = [
  { name: "Rahul Sharma", company: "Google", package: "45 LPA", year: "2024", position: "SDE-2" },
  { name: "Priya Singh", company: "Amazon", package: "38 LPA", year: "2024", position: "SDE-1" },
  { name: "Amit Kumar", company: "Microsoft", package: "42 LPA", year: "2023", position: "SDE-2" },
  { name: "Sneha Patel", company: "Meta", package: "50 LPA", year: "2024", position: "SDE-2" },
  { name: "Vikram Desai", company: "Netflix", package: "48 LPA", year: "2023", position: "Senior Engineer" },
  { name: "Anjali Gupta", company: "Apple", package: "55 LPA", year: "2024", position: "iOS Developer" },
]
