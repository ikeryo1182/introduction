import { NextPage } from 'next'
import React from "react"
import Comment from '../components/Comment';

interface Props {
}

const useIsOpenCommentState = () => {
  const [isOpenComment, setIsOpenComment] = React.useState(false)

  return { isOpenComment, setIsOpenComment}
}

const IndexPage: NextPage<Props> = () => {
  const { isOpenComment, setIsOpenComment } = useIsOpenCommentState();

  const handleClick = () => {
    setIsOpenComment(!isOpenComment)
  }

  return (
    <main>
      <Comment isOpen={isOpenComment} onClick={handleClick} />
      <style jsx>{`
        * {
          user-select: none;
        }
      `}</style>
    </main>
  )
}

IndexPage.getInitialProps = async () => {
  return {}
}

export default IndexPage
