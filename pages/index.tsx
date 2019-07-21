import { NextPage } from 'next'
import React from "react"
import Comment, { CommentType } from '../components/Comment';

interface Props {
}

const useIsOpenCommentState = () => {
  // TODO: boolean | null は気持ち悪いから enum 使う
  const [isOpenComment, setIsOpenComment] = React.useState<boolean | null>(false)

  return { isOpenComment, setIsOpenComment }
}

const useCommentState = () => {
  const [comment, setComment] = React.useState({ name: "", message: "" })

  return { comment, setComment }
}

const IndexPage: NextPage<Props> = () => {
  const { isOpenComment, setIsOpenComment } = useIsOpenCommentState();
  const { comment, setComment } = useCommentState();

  const handleClick = () => {
    setIsOpenComment(!isOpenComment)
  }

  const handleChangeComment = (comment: CommentType) => {
    setComment(comment);
  }

  const handleSubmit = () => {
    setIsOpenComment(null);
    alert("Comment function is in development 😓")
  }

  return (
    <main>
      <div>
        Introduction Page
      </div>
      {isOpenComment !== null ? (
        <Comment comment={comment} isOpen={isOpenComment} onClick={handleClick} onChangeComment={handleChangeComment} onSubmit={handleSubmit} />
      ) : null}
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
