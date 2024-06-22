export interface User {
  login: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
}

export interface Issue {
  title: string
  body: string
  user: User
  comments: number
  number: number
  createdAt: string
}
