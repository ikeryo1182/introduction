import { NextPage } from 'next'
import React from "react"
import GlobalCommentForm from '../components/GlobalCommentForm';
import Comment from '../models/Comment';
import CommentStep from '../enums/CommentStep';

interface Props {
}

const useCommentStepState = () => {
  // TODO: boolean | null は気持ち悪いから enum 使う
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
      <div>
        Introduction Page ( <a href="https://github.com/ikeryo1182/introduction">GitHub</a> )
      </div>
      <GlobalCommentForm comment={comment} commentStep={commentStep} onClick={handleClick} onChangeComment={handleChangeComment} onSubmit={handleSubmit} />
      <style jsx>{`
        * {
          user-select: none;
        }
        main {
          font-family: Avenir,Helvetica,Arial,sans-serif;
        }
      `}</style>
    </main>
  )
}

IndexPage.getInitialProps = async () => {
  return {}
}

export default IndexPage
