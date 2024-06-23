import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Issue } from '../../@types/github'
import { Header } from '../../components/Header/Header'
import { TitleCard } from './components/TitleCard/TitleCard'
import Markdown from 'react-markdown'
import { PostContentContainer } from './styles'
import remarkGfm from 'remark-gfm'
import { PostSkeleton } from './components/PostSkeleton/PostSkeleton'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import rehypeRaw from 'rehype-raw'

interface CodeProps {
  inline?: boolean
  className?: string
  children?: React.ReactNode
}

export function Post({ repo }: { repo: string }) {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issue | null>(null)

  const fetchIssue = useCallback(async () => {
    const response = await api.get(`/repos/${repo}/issues/${id}`)
    const data = await response.data
    setIssue(data)
  }, [id, repo])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue, id])

  if (!issue) {
    return (
      <>
        <Header />
        <PostSkeleton />
      </>
    )
  }

  return (
    <>
      <Header />
      <TitleCard issue={issue} />
      <PostContentContainer>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ inline, className, children, ...props }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '')

              return !inline && match ? (
                <SyntaxHighlighter
                  style={darcula}
                  language={match[1]}
                  customStyle={{
                    padding: '1rem',
                    background: 'transparent',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {issue.body}
        </Markdown>
      </PostContentContainer>
    </>
  )
}
