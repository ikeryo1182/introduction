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
      <div className="S">
        <h2>INTRODUCTION</h2>
      </div>
      <div className="S G">
        <h2>PROFILE</h2>
        <div className="D">
          <div className="F">
            <h3>NAME</h3>
            <p>Ryo Ikeura</p>
          </div>
          <div className="F">
            <h3>AGE</h3>
            <p>26 ( 1993/4/24 )</p>
          </div>
          <div className="F">
            <h3>SKILLS</h3>
            <p>Frontend / Backend</p>
          </div>
        </div>
      </div>
      <div className="S">
        <h2>WORKS</h2>
        <div className="D">
          <div className="F">
            <h3>JOB</h3>
            <p>Kepple Inc.</p>
          </div>
        </div>
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
          flex-direction:column;
          align-items:center;
          height:100vh;
          margin:0;
          padding:0;
        }
        .G {
          background-color: #F9F9F9
        }
        .D {
          width:30%;
          display:flex;
          justify-content:flex-start;
          flex-direction:column;
        }
        .F {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        @media screen and (max-width:780px) {
            .D {
              width:80%;
            }
        }
      `}</style>
    </main>
  )
}

IndexPage.getInitialProps = async () => {
  return {}
}

export default IndexPage
