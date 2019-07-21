import { NextPage } from 'next'
import React from "react"
import GlobalCommentForm from '../components/GlobalCommentForm';
import Comment from '../models/Comment';
import CommentStep from '../enums/CommentStep';

interface Props {
}

const useCommentStepState = () => {
  const [commentStep, setCommentStep] = React.useState<CommentStep>(CommentStep.CLOSE)

  return { commentStep, setCommentStep }
}

const useCommentState = () => {
  const [comment, setComment] = React.useState({ name: "", message: "" })

  return { comment, setComment }
}

const IndexPage: NextPage<Props> = () => {
  const { commentStep, setCommentStep } = useCommentStepState();
  const { comment, setComment } = useCommentState();

  const handleClick = () => {
    setCommentStep(commentStep === CommentStep.CLOSE ? CommentStep.OPEN : CommentStep.CLOSE)
  }

  const handleChangeComment = (comment: Comment) => {
    setComment(comment);
  }

  const handleSubmit = () => {
    setCommentStep(CommentStep.FINISHED);
    alert("Comment function is in development 😓")
  }

  return (
    <main>
      <div className="S W">
        <h2>Introduction ( <a href="https://github.com/ikeryo1182/introduction">GitHub</a> )</h2>
      </div>
      <div className="S G">
        <h2>PROFILE</h2>
      </div>
      <div className="S W">
        <h2>WORKS</h2>
      </div>
      <div className="S G">
        <h2>BLOG</h2>
      </div>
      <GlobalCommentForm comment={comment} commentStep={commentStep} onClick={handleClick} onChangeComment={handleChangeComment} onSubmit={handleSubmit} />
      <style jsx global>{`
      body { 
        height: 100%;
        margin:0 !important;
      }
    `}</style>
      <style jsx>{`
        * {
          user-select: none;
        }
        main {
          font-family: Avenir,Helvetica,Arial,sans-serif;
        }
        .S {
          display:flex;
          justify-content:center;
          align-items:center;
          height:100vh;
          margin:0;
          padding:0;
        }
        .G {
          background-color: #F9F9F9
        }
      `}</style>
    </main>
  )
}

IndexPage.getInitialProps = async () => {
  return {}
}

export default IndexPage
