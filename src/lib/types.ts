export interface PersonalInfo {
  _id?: string
  name?: string
  title?: string
  subtitle?: string
  bio?: string
  email?: string
  phone?: string
  location?: string
  github?: string
  linkedin?: string
}



export interface Skill {
  _id?: string
  category: string
  technologies: string[]
}

export interface Project {
  _id?: string
  title: string
  description: string
  technologies: string[]
  codeUrl?: string
  liveUrl?: string
  featured: boolean
  imageUrl?:string
}
